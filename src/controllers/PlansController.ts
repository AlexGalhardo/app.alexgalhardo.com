import { Request, Response, NextFunction } from "express";
import Stripe from "stripe";

import Header from "../helpers/Header";
import NodeMailer from "../helpers/NodeMailer";
import TelegramBOTLogger from "../helpers/TelegramBOTLogger";
import StripeModel from "../models/StripeModel";
import Users from "../models/Users";

const stripe = new Stripe(`${process.env.STRIPE_SK_TEST}`);

export default class PlansController {
    static getViewPricing(req: Request, res: Response) {
        return res.render("pages/pricing/pricing", {
            flash_warning: req.flash("warning"),
            user: global.SESSION_USER,
            header: Header.pricing("Plans - Galhardo APP"),
        });
    }

    static getViewPlanProCheckout(req: Request, res: Response) {
        return res.render("pages/plans/pro_checkout", {
            flash_warning: req.flash("warning"),
            user: global.SESSION_USER,
            header: Header.plans("Plan PRO - Galhardo APP"),
        });
    }

    static getViewPlanPremiumCheckout(req: Request, res: Response) {
        return res.render("pages/plans/premium_checkout", {
            flash_warning: req.flash("warning"),
            user: global.SESSION_USER,
            header: Header.plans("Plan PREMIUM - Galhardo APP"),
        });
    }

    static getSubscriptionBanner(plan_name) {
        if (plan_name === "PRO") {
            return `
            <div class="card mb-4 rounded-3 shadow-sm text-center">
                    <div class="card-header py-3 bg-warning">
                        <h4 class="my-0 fw-bold"><i class="bi bi-award"></i>Now You Are PRO!</h4>
                    </div>

                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$ 1.99<small class="text-muted fw-light">/month</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>✔️ Site Ilimited Recomendations</li>
                            <li>✔️ Get Recommendations in your Email</li>
                            <li>❌ Get Recommendations in your Telegram</li>
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
        if (!global.SESSION_USER.stripe_customer_id) {
            const customer = await stripe.customers.create({
                description: "Customer created in Subscription checkout!",
                email: global.SESSION_USER.email,
            });
            await Users.createStripeCustomer(global.SESSION_USER.id, customer.id);
            return customer.id;
        }
        return global.SESSION_USER.stripe_customer_id;
    }

    static async verifyIfUserAlreadyHasAStripeCardRegistred(req: Request, stripeCustomerId: string) {
        const { card_number, card_exp_year, card_exp_month, card_cvc } = req.body;

        const customerCard = {
            number: card_number,
            exp_month: card_exp_month,
            exp_year: card_exp_year,
            cvc: card_cvc,
        };

        if (!global.SESSION_USER.stripe_card_id) {
            const cardToken = await stripe.tokens.create({
                card: customerCard,
            });

            await Users.createStripeCard(global.SESSION_USER.id, cardToken, card_number);

            await stripe.customers.createSource(stripeCustomerId, {
                source: cardToken.id,
            });

            return cardToken;
        }

        const cardToken = await stripe.tokens.create({
            card: customerCard,
        });

        await stripe.customers.createSource(stripeCustomerId, {
            source: cardToken.id,
        });

        return cardToken;
    }

    static getStripePlan() {
        return {
            PRO: {
                name: "PRO",
                id: process.env.STRIPE_PLAN_PRO_PRICE_ID,
                amount: process.env.STRIPE_PLAN_PRO_AMOUNT,
            },
            PREMIUM: {
                name: "PREMIUM",
                id: process.env.STRIPE_PLAN_PREMIUM_PRICE_ID,
                amount: process.env.STRIPE_PLAN_PREMIUM_AMOUNT,
            },
        };
    }

    static async createStripeSubscription(stripeCustomerId: string, planId: string) {
        const subscription = await stripe.subscriptions.create({
            customer: stripeCustomerId,
            items: [{ price: planId }],
        });

        return subscription;
    }

    static async postSubscription(req: Request, res: Response, next: NextFunction) {
        try {
            const { plan_name, confirm_password } = req.body;

            if (!(await Users.verifyPassword(global.SESSION_USER.id, confirm_password))) {
                req.flash("warning", "Invalid Password!");
                return res.redirect(`/shop`);
            }

            const stripeCustomerId = await PlansController.verifyIfUserIsAlreadyAStripeCustomer();

            const stripeCard = await PlansController.verifyIfUserAlreadyHasAStripeCardRegistred(req, stripeCustomerId);

            const stripePlan = await PlansController.getStripePlan()[plan_name];

            const subscription = await PlansController.createStripeSubscription(stripeCustomerId, stripePlan.id);

            const subsTransactionObject = {
                transaction_id: subscription.id,
                status: subscription.status,
                card_id: stripeCard.card.id,
                card_brand: stripeCard.card.brand,
                card_exp_month: stripeCard.card.exp_month,
                card_exp_year: stripeCard.card.exp_year,
                card_last4: stripeCard.card.last4,
                stripe_plan_id: stripePlan.id,
                plan_name: stripePlan.name,
                plan_amount: stripePlan.amount,
                current_period_start: new Date(subscription.current_period_start * 1000),
                current_period_end: new Date(subscription.current_period_end * 1000),
                cancel_at_period_end: subscription.cancel_at_period_end,
                stripe_customer_id: stripeCustomerId,
                user_id: global.SESSION_USER.id,
                user_email: global.SESSION_USER.email,
                user_name: global.SESSION_USER.name,
                createdAt: new Date(),
            };

            await Users.createStripeSubscription(global.SESSION_USER.id, subsTransactionObject);

            await StripeModel.createSubscriptionTransaction(subsTransactionObject);

            await NodeMailer.sendSubscriptionTransaction(subsTransactionObject);

            await TelegramBOTLogger.logSubscriptionTransaction(subsTransactionObject);

            return res.render("pages/plans/planPayLog", {
                flash_success: "Subscription Created with Success!",
                subsTransactionObject,
                user: global.SESSION_USER,
                header: Header.plans("Plan Pay Status - Galhardo APP"),
                divPlanBanner: PlansController.getSubscriptionBanner(plan_name),
            });
        } catch (error) {
            next(error);
        }
    }
}
