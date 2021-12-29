/* eslint-disable radix */
import Bcrypt from '@helpers/Bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type shopTransactionObject = {
    transaction_id: string;
    total_amount: number;
    card_id: string;
    card_brand: string;
    card_exp_month: number;
    card_exp_year: number;
    card_last4: number;
    currency: string;
    paid: boolean;
    products_amount: number;
    products: string;
    stripe_customer_id: string;
    user_id: string;
    user_email: string;
    user_phone: string;
    user_name: string;
    shipping_address_zipcode: string;
    shipping_address_street: string;
    shipping_address_street_number: number;
    shipping_address_neighborhood: string;
    shipping_address_city: string;
    shipping_address_state: string;
    shipping_address_country: string;
    shipping_carrier: string;
    shipping_fee: number;
};

type subscriptionTransactionObject = {
    transaction_id: string;
    status: string;
    card_id: string;
    card_brand: string;
    card_exp_month: number;
    card_exp_year: number;
    card_last4: number;
    plan_id: string;
    plan_name: string;
    plan_amount: number;
    current_period_start: string;
    current_period_end: string;
    cancel_at_period_end: boolean;
    stripe_customer_id: string;
    user_id: string;
    user_email: string;
    user_name: string;
};

class StripeModel {
    async createShopTransaction(shopTransactionObject: shopTransactionObject) {
        await prisma.stripeShopTransaction.create({
            data: {
                transaction_id: shopTransactionObject.transaction_id,
                total_amount: shopTransactionObject.total_amount,
                card_id: shopTransactionObject.card_id,
                card_brand: shopTransactionObject.card_brand,
                card_exp_month: shopTransactionObject.card_exp_month,
                card_exp_year: shopTransactionObject.card_exp_year,
                card_last4: shopTransactionObject.card_last4,
                currency: shopTransactionObject.currency,
                paid: shopTransactionObject.paid,
                products_amount: shopTransactionObject.products_amount,
                products: JSON.stringify(shopTransactionObject.products),
                stripe_customer_id: shopTransactionObject.stripe_customer_id,
                user_id: shopTransactionObject.user_id,
                user_email: shopTransactionObject.user_email,
                user_phone: shopTransactionObject.user_phone,
                user_name: shopTransactionObject.user_name,
                shipping_address_zipcode:
                    shopTransactionObject.shipping_address_zipcode,
                shipping_address_street:
                    shopTransactionObject.shipping_address_street,
                shipping_address_street_number:
                    shopTransactionObject.shipping_address_street_number,
                shipping_address_neighborhood:
                    shopTransactionObject.shipping_address_neighborhood,
                shipping_address_city:
                    shopTransactionObject.shipping_address_city,
                shipping_address_state:
                    shopTransactionObject.shipping_address_state,
                shipping_address_country:
                    shopTransactionObject.shipping_address_country,
                shipping_carrier: shopTransactionObject.shipping_carrier,
                shipping_fee: shopTransactionObject.shipping_fee,
            },
        });
    }

    async createSubscriptionTransaction(
        subscriptionTransactionObject: subscriptionTransactionObject
    ) {
        await prisma.stripeSubscriptionTransaction.create({
            data: {
                transaction_id: subscriptionTransactionObject.transaction_id,
                status: subscriptionTransactionObject.status,
                card_id: subscriptionTransactionObject.card_id,
                card_brand: subscriptionTransactionObject.card_brand,
                card_exp_month: parseInt(
                    subscriptionTransactionObject.card_exp_month
                ),
                card_exp_year: parseInt(
                    subscriptionTransactionObject.card_exp_year
                ),
                card_last4: parseInt(subscriptionTransactionObject.card_last4),
                plan_id: subscriptionTransactionObject.stripe_plan_id,
                plan_name: subscriptionTransactionObject.plan_name,
                plan_amount: parseInt(
                    subscriptionTransactionObject.plan_amount
                ),
                current_period_start:
                    subscriptionTransactionObject.current_period_start,
                current_period_end:
                    subscriptionTransactionObject.current_period_end,
                cancel_at_period_end:
                    subscriptionTransactionObject.cancel_at_period_end,
                stripe_customer_id:
                    subscriptionTransactionObject.stripe_customer_id,
                user_id: subscriptionTransactionObject.user_id,
                user_email: subscriptionTransactionObject.user_email,
                user_name: subscriptionTransactionObject.user_name,
            },
        });
    }
}

export default new StripeModel();
