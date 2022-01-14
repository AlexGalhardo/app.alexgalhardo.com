/* eslint-disable radix */
import { PrismaClient } from '@prisma/client';

import {
    inputShopTransactionObject,
    inputSubscriptionTransactionObject,
} from '../helpers/InputTypes';

const prisma = new PrismaClient();

export default class StripeModel {
    static async createShopTransaction(
        shopTransactionObject: inputShopTransactionObject
    ) {
        await prisma.stripeShopTransaction.create({
            data: {
                transaction_id: shopTransactionObject.transaction_id,
                total_amount: parseInt(
                    shopTransactionObject.total_amount * 100
                ),
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
                shipping_fee: parseInt(shopTransactionObject.shipping_fee),
            },
        });
    }

    static async getShopTransactionsByUserId(userId: string) {
        return prisma.stripeShopTransaction.findMany({
            where: {
                user_id: userId,
            },
            select: {
                created_at: true,
                transaction_id: true,
                total_amount: true,
                paid: true,
                card_id: true,
            },
        });
    }

    static async getShopTransactionById(orderId: string) {
        return prisma.stripeShopTransaction.findUnique({
            where: {
                id: orderId,
            },
        });
    }

    static async createSubscriptionTransaction(
        subscriptionTransactionObject: inputSubscriptionTransactionObject
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

    static async getSubscriptionsTransactionsByUserId(user_id: string) {
        return prisma.stripeSubscriptionTransaction.findMany({
            where: {
                user_id,
            },
        });
    }

    static async getSubscriptionTransactionById(orderId: string) {
        return prisma.stripeSubscriptionTransaction.findUnique({
            where: {
                id: orderId,
            },
        });
    }
}
