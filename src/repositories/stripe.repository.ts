import prisma from "../config/prisma";
import { ShopTransactionDTO, SubscriptionTransactionDTO } from "../utils/InputTypes";

export default class StripeRepository {
    static async createShopTransaction({
        transaction_id,
        total_amount,
        card_id,
        card_brand,
        card_exp_month,
        card_exp_year,
        card_last4,
        currency,
        paid,
        products,
        stripe_customer_id,
        user_id,
        user_email,
        user_phone,
        user_name,
        shipping_address_city,
        shipping_address_neighborhood,
        shipping_address_country,
        shipping_address_street,
        shipping_address_street_number,
        shipping_address_state,
        shipping_address_zipcode,
        shipping_carrier,
        shipping_fee,
    }: ShopTransactionDTO) {
        await prisma.stripeShopTransaction.create({
            data: {
                transaction_id,
                total_amount: Math.floor(Number(total_amount)),
                card_id,
                card_brand,
                card_exp_month,
                card_exp_year,
                card_last4,
                currency,
                paid: paid,
                products_amount: 1990,
                products: JSON.stringify(products),
                stripe_customer_id: stripe_customer_id,
                user_id,
                user_email,
                user_phone,
                user_name,
                shipping_address_zipcode,
                shipping_address_street,
                shipping_address_street_number,
                shipping_address_neighborhood,
                shipping_address_city,
                shipping_address_state,
                shipping_address_country,
                shipping_carrier,
                shipping_fee: Number(shipping_fee),
            },
        });
    }

    static async getShopTransactionsByUserId(user_id: string) {
        return prisma.stripeShopTransaction.findMany({
            where: {
                user_id,
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

    static async createSubscriptionTransaction({
        transaction_id,
        status,
        card_id,
        card_brand,
        card_exp_month,
        card_exp_year,
        card_last4,
        plan_id,
        plan_name,
        plan_amount,
        current_period_start,
        current_period_end,
        cancel_at_period_end,
        stripe_customer_id,
        user_id,
        user_email,
        user_name,
    }: SubscriptionTransactionDTO) {
        await prisma.stripeSubscriptionTransaction.create({
            data: {
                transaction_id,
                status,
                card_id,
                card_brand,
                card_exp_month,
                card_exp_year,
                card_last4,
                plan_id,
                plan_name,
                plan_amount,
                current_period_start,
                current_period_end,
                cancel_at_period_end,
                stripe_customer_id,
                user_id,
                user_email,
                user_name,
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
