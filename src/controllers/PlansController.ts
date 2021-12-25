/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * http://localhost:3000/plans
 */

import { Request, Response, NextFunction } from 'express';
import Stripe from 'stripe';

import DateTime from '../helpers/DateTime';
import Header from '../helpers/Header';
import NodeMailer from '../helpers/NodeMailer';
import TelegramBOTLogger from '../helpers/TelegramBOTLogger';
import StripeModel from '../models/StripeModel';
import Users from '../models/Users';

const stripe = new Stripe(`${process.env.STRIPE_SK_TEST}`);

class PlansController {
    getViewPlans(req: Request, res: Response) {
        return res.render('pages/plans/plans', {
            flash_warning: req.flash('warning'),
            user: SESSION_USER,
            header: Header.plans('Plans - Galhardo APP'),
        });
    }

    getViewPlanStarterCheckout(req: Request, res: Response) {
        return res.render('pages/plans/starter_checkout', {
            flash_warning: req.flash('warning'),
            user: SESSION_USER,
            header: Header.plans('Plan STARTER - Galhardo APP'),
        });
    }

    getViewPlanProCheckout(req: Request, res: Response) {
        return res.render('pages/plans/pro_checkout', {
            flash_warning: req.flash('warning'),
            user: SESSION_USER,
            header: Header.plans('Plan PRO - Galhardo APP'),
        });
    }

    getViewPlanPremiumCheckout(req: Request, res: Response) {
        return res.render('pages/plans/premium_checkout', {
            flash_warning: req.flash('warning'),
            user: SESSION_USER,
            header: Header.plans('Plan PREMIUM - Galhardo APP'),
        });
    }

    static getSubscriptionBanner(plan_name) {
        if (plan_name === 'STARTER') {
            return `
            <div class="card mb-4 rounded-3 shadow-sm text-center">
                    <div class="card-header py-3 bg-warning">
                        <h4 class="my-0 fw-bold"><i class="bi bi-award"></i> You Are STARTER!</h4>
                    </div>

                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$ 1.99<small class="text-muted fw-light">/month</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>✔️ Site Ilimited Recomendations</li>
                            <li>❌ Get Recommendations in Email</li>
                            <li>❌ Get Recommendations in Telegram</li>
                        </ul>
                    </div>

                </div>`;
        }
        if (plan_name === 'PRO') {
            return `
            <div class="card mb-4 rounded-3 shadow-sm text-center">
                    <div class="card-header py-3 bg-danger">
                        <h4 class="my-0 fw-normal">You Are PRO!</h4>
                    </div>

                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$ 2.99<small class="text-muted fw-light">/month</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>✔️ Site Ilimited Recomendations</li>
                            <li>✔️ Get Recommendations in Email</li>
                            <li>❌ Get Recommendations in Telegram</li>
                        </ul>
                    </div>

                </div>`;
        }

        return `
                <div class="card mb-4 rounded-3 shadow-sm text-center">
                    <div class="card-header py-3 bg-info">
                        <h4 class="my-0 fw-normal">You Are PREMIUM!</h4>
                    </div>

                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$ 4.99<small class="text-muted fw-light">/month</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>✔️ Site Ilimited Recomendations</li>
                            <li>✔️ Get Recommendations in Email</li>
                            <li>✔️ Get Recommendations in Telegram</li>
                        </ul>
                    </div>

                </div>
            `;
    }

    static async verifyIfUserIsAlreadyAStripeCustomer() {
        if (!SESSION_USER.stripe_customer_id) {
            const stripeCustomer = await stripe.customers.create({
                description: 'Customer created in Subscription checkout!',
                email: SESSION_USER.email,
            });
            await Users.createStripeCustomer(
                SESSION_USER.id,
                stripeCustomer.id
            );
            return stripeCustomer.id;
        }
        return SESSION_USER.stripe_customer_id;
    }

    static async verifyIfUserAlreadyHasAStripeCardRegistred(req: Request) {
        if (!SESSION_USER.stripe_card_id) {
            const { card_number, card_exp_year, card_exp_month, card_cvc } =
                req.body;

            const cardToken = await stripe.tokens.create({
                card: {
                    number: card_number,
                    exp_month: card_exp_month,
                    exp_year: card_exp_year,
                    cvc: card_cvc,
                },
            });

            const card = await stripe.customers.createSource(
                SESSION_USER.stripe_customer_id,
                { source: cardToken.id }
            );

            const stripeCard = await Users.createStripeCard(
                SESSION_USER.id,
                card
            );
            return stripeCard;
        }

        return {
            card_token_id: SESSION_USER.stripe_card_token_id,
            card_id: SESSION_USER.stripe_card_id,
            card_brand: SESSION_USER.stripe_card_brand,
            card_last4: SESSION_USER.stripe_card_last4,
            card_exp_month: SESSION_USER.stripe_card_exp_month,
            card_exp_year: SESSION_USER.stripe_card_exp_year,
        };
    }

    static getStripePlan() {
        return {
            STARTER: {
                name: 'STARTER',
                id: process.env.STRIPE_PLAN_STARTER_PRICE_ID,
                amount: process.env.STRIPE_PLAN_STARTER_AMOUNT,
            },
            PRO: {
                name: 'PRO',
                id: process.env.STRIPE_PLAN_PRO_PRICE_ID,
                amount: process.env.STRIPE_PLAN_PRO_AMOUNT,
            },
            PREMIUM: {
                name: 'PREMIUM',
                id: process.env.STRIPE_PLAN_PREMIUM_PRICE_ID,
                amount: process.env.STRIPE_PLAN_PREMIUM_AMOUNT,
            },
        };
    }

    static async createStripeSubscription(stripe_customer_id, plan_id) {
        const subscription = await stripe.subscriptions.create({
            customer: stripe_customer_id,
            items: [{ price: plan_id }],
        });

        subscription.created = DateTime.getDateTime(subscription.created);
        subscription.current_period_end = DateTime.getDateTime(
            subscription.current_period_end
        );
        subscription.current_period_start = DateTime.getDateTime(
            subscription.current_period_start
        );

        return subscription;
    }

    async postSubscription(req: Request, res: Response, next: NextFunction) {
        try {
            const { plan_name, confirm_password } = req.body;

            /* const validPassword = await Users.verifyPassword(
                SESSION_USER.id,
                confirm_password
            );

            if (!validPassword) {
                req.flash('warning', 'Invalid Password!');
                return res.redirect(
                    `/plan/${plan_name.toLowerCase()}/checkout`
                );
            } */

            const stripeCustomerID =
                await PlansController.verifyIfUserIsAlreadyAStripeCustomer();

            const stripeCard =
                await PlansController.verifyIfUserAlreadyHasAStripeCardRegistred(
                    req
                );

            const stripePlan = await PlansController.getStripePlan()[plan_name];

            const subscription = await PlansController.createStripeSubscription(
                stripeCustomerID,
                stripePlan.id
            );

            const subsTransactionObject = {
                created_at: DateTime.getNow(),
                transaction_id: subscription.id,
                status: subscription.status,
                card_id: stripeCard.card_id,
                card_brand: stripeCard.card_brand,
                card_exp_month: stripeCard.card_exp_month,
                card_exp_year: stripeCard.card_exp_year,
                card_last4: stripeCard.card_last4,
                stripe_plan_id: stripePlan.id,
                plan_name: stripePlan.name,
                amount: stripePlan.amount,
                current_period_start: subscription.current_period_start,
                current_period_end: subscription.current_period_end,
                cancel_at_period_end: subscription.cancel_at_period_end,
                stripe_customer_id: SESSION_USER.stripe.customer_id,
                user_id: SESSION_USER.id,
                user_email: SESSION_USER.email,
                user_name: SESSION_USER.name,
            };

            await Users.createStripeSubscription(
                SESSION_USER.id,
                plan_name,
                subscription
            );

            await StripeModel.createSubscriptionTransaction(
                subsTransactionObject
            );

            await NodeMailer.sendSubscriptionTransaction(subsTransactionObject);

            await TelegramBOTLogger.logSubscriptionTransaction(
                subsTransactionObject
            );

            res.render('pages/plans/planPayLog', {
                flash_success: 'Subscription Created with Success!',
                subsTransactionObject,
                user: SESSION_USER,
                header: Header.plans('Plan Pay Status - Galhardo APP'),
                divPlanBanner: PlansController.getSubscriptionBanner(plan_name),
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new PlansController();
