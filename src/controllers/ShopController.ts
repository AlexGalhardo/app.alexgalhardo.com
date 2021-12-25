/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 */

import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
import Stripe from 'stripe';

import DateTime from '../helpers/DateTime';
import Header from '../helpers/Header';
import NodeMailer from '../helpers/NodeMailer';
import TelegramBOTLogger from '../helpers/TelegramBOTLogger';
import StripeModel from '../models/StripeModel';
import Users from '../models/Users';

const stripe = new Stripe(`${process.env.STRIPE_SK_TEST}`);

class ShopController {
    getViewShop(req: Request, res: Response) {
        return res.render('pages/shop/shop_checkout', {
            user: SESSION_USER,
            flash_warning: req.flash('warning'),
            header: Header.shop(),
        });
    }

    static async verifyIfUserIsAlreadyAStripeCustomer() {
        if (!SESSION_USER.stripe_customer_id) {
            const customer = await stripe.customers.create({
                description: 'Customer created in Subscription checkout!',
                email: SESSION_USER.email,
            });
            await Users.createStripeCustomer(SESSION_USER.id, customer.id);
        }
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

        if (SESSION_USER.stripe_card_id === null) {
            const cardToken = await stripe.tokens.create({
                card: customerCard,
            });

            await Users.createStripeCard(SESSION_USER.id, customerCard);

            return cardToken.id;
        }

        const cardToken = await stripe.tokens.create({
            card: customerCard,
        });

        return cardToken.id;
    }

    async postShopPayLog(req: Request, res: Response, next: NextFunction) {
        try {
            const {
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

            /* const validPassword = await Users.verifyPassword(
                SESSION_USER.id,
                confirm_password
            );

            if (!validPassword) {
                req.flash('warning', 'Invalid Password!');
                return res.redirect(`/shop`);
            } */

            await ShopController.verifyIfUserIsAlreadyAStripeCustomer();

            const stripeCardTokenID =
                await ShopController.verifyIfUserAlreadyHasAStripeCardRegistred(
                    req
                );

            const products = [
                {
                    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3swk.png',
                    name: 'God Of War Ragnarok',
                    total: 5990,
                },
                {
                    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2gvu.png',
                    name: 'Horizon Forbidden West',
                    total: 5990,
                },
                {
                    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co391c.png',
                    name: 'Elden Ring',
                    total: 5990,
                },
            ];

            const shopCardCharge = await stripe.charges.create({
                amount: 17970,
                currency: 'usd',
                source: stripeCardTokenID,
                description: JSON.stringify(products),
                receipt_email: customer_email,
            });

            const shopTransactionObject = {
                transaction_id: shopCardCharge.id,
                total_amount: 17970,
                card_id: shopCardCharge.source.id,
                card_brand: shopCardCharge.source.brand,
                card_exp_month: shopCardCharge.source.exp_month,
                card_exp_year: shopCardCharge.source.exp_year,
                card_last4: parseInt(shopCardCharge.source.last4),
                currency: shopCardCharge.currency,
                paid: shopCardCharge.paid,
                products_amount: 17970,
                products,
                stripe_customer_id: SESSION_USER.stripe_customer_id,
                user_id: SESSION_USER.id,
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
                shipping_fee: parseInt(shipping_fee),
                created_at: DateTime.getNow(),
            };

            await StripeModel.createShopTransaction(shopTransactionObject);
            await NodeMailer.sendShopTransaction(shopTransactionObject);
            await TelegramBOTLogger.logShopTransaction(shopTransactionObject);

            return res.render('pages/shop/shopPayLog', {
                flash_success: 'Shop Transaction Created with Success!',
                shopTransactionObject,
                user: SESSION_USER,
                header: Header.shop(),
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new ShopController();
