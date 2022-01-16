import { Request, Response, NextFunction } from 'express';
import Stripe from 'stripe';

import DateTime from '../helpers/DateTime';
import Header from '../helpers/Header';
import NodeMailer from '../helpers/NodeMailer';
import TelegramBOTLogger from '../helpers/TelegramBOTLogger';
import StripeModel from '../models/StripeModel';
import Users from '../models/Users';

const stripe = new Stripe(`${process.env.STRIPE_SK_TEST}`);

export default class ShopController {
    static async getViewShop(req: Request, res: Response) {
        const shopCartItens = await Users.getShopCartItens();
        const shopCartTotalAmount = await Users.getShopCartTotalAmount();
        const totalItensShopCart = await Users.getTotalItensShopCart();

        if (!shopCartItens || !totalItensShopCart) {
            req.flash('warning', 'Add at least 1 product to your shop cart!');
            return res.redirect('/');
        }

        return res.render('pages/shop/shop_checkout', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            shopCartItens,
            shopCartTotalAmount,
            totalItensShopCart,
            user: global.SESSION_USER,
            header: Header.shop(),
        });
    }

    static async removeCartItem(req: Request, res: Response) {
        const { item_id } = req.params;

        if (await Users.removeShopCartItem(item_id)) {
            req.flash('success', `Item removed from your cart!`);
            return res.redirect('/shop');
        }

        req.flash('warning', `Some error ocurred`);
        return res.redirect('/shop');
    }

    static async verifyIfUserIsAlreadyAStripeCustomer() {
        if (!global.SESSION_USER.stripe_customer_id) {
            const customer = await stripe.customers.create({
                description: 'Customer created in Subscription checkout!',
                email: global.SESSION_USER.email,
            });
            await Users.createStripeCustomer(global.SESSION_USER.id, customer.id);
            return customer.id;
        }
        return global.SESSION_USER.stripe_customer_id;
    }

    static async verifyIfUserAlreadyHasAStripeCardRegistred(req: Request) {
        const { card_number, card_exp_year, card_exp_month, card_cvc } =
            req.body;

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

            await Users.createStripeCard(
                global.SESSION_USER.id,
                cardToken,
                card_number
            );

            return cardToken.id;
        }

        const cardToken = await stripe.tokens.create({
            card: customerCard,
        });

        return cardToken.id;
    }

    static async postShopPayLog(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const {
                total_shop_amount,
                customer_email,
                customer_name,
                customer_phone,
                confirm_password,
                zipcode,
                customer_street,
                customer_neighborhood,
                customer_city,
                customer_state,
                shipping_fee,
            } = req.body;

            if (
                !(await Users.verifyPassword(global.SESSION_USER.id, confirm_password))
            ) {
                req.flash('warning', 'Invalid Password!');
                return res.redirect(`/shop`);
            }

            const stripeCustomerID =
                await ShopController.verifyIfUserIsAlreadyAStripeCustomer();

            const stripeCardTokenID =
                await ShopController.verifyIfUserAlreadyHasAStripeCardRegistred(
                    req
                );

            const products = await Users.getShopCartItens();

            const shopCardCharge = await stripe.charges.create({
                amount: parseInt(total_shop_amount + shipping_fee * 100),
                currency: 'usd',
                source: stripeCardTokenID,
                description: JSON.stringify(products),
                receipt_email: customer_email,
            });

            const shopTransactionObject = {
                transaction_id: shopCardCharge.id,
                total_amount: parseFloat(
                    parseFloat(total_shop_amount) + parseFloat(shipping_fee)
                ).toFixed(2),
                card_id: shopCardCharge.source.id,
                card_brand: shopCardCharge.source.brand,
                card_exp_month: shopCardCharge.source.exp_month,
                card_exp_year: shopCardCharge.source.exp_year,
                card_last4: parseInt(shopCardCharge.source.last4),
                currency: shopCardCharge.currency,
                paid: shopCardCharge.paid,
                products_amount: parseFloat(total_shop_amount),
                products,
                stripe_customer_id: stripeCustomerID,
                user_id: global.SESSION_USER.id,
                user_email: customer_email,
                user_phone: customer_phone,
                user_name: customer_name,
                shipping_address_zipcode: zipcode,
                shipping_address_street: customer_street,
                shipping_address_street_number: 42,
                shipping_address_neighborhood: customer_neighborhood,
                shipping_address_city: customer_city,
                shipping_address_state: customer_state,
                shipping_address_country: 'Brazil',
                shipping_carrier: 'Correios',
                shipping_fee: parseFloat(shipping_fee).toFixed(2),
                created_at: new Date(),
            };

            await StripeModel.createShopTransaction(shopTransactionObject);
            await NodeMailer.sendShopTransaction(shopTransactionObject);
            await TelegramBOTLogger.logShopTransaction(shopTransactionObject);

            await Users.removeAllShopCartItens();

            return res.render('pages/shop/shopPayLog', {
                flash_success: 'Shop Transaction Created with Success!',
                shopTransactionObject,
                user: global.SESSION_USER,
                header: Header.shop(),
            });
        } catch (error) {
            next(error);
        }
    }
}
