import Bcrypt from '@helpers/Bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class StripeModel {
    async createShopTransaction(shopTransactionObject) {
        await prisma.stripeShopTransaction.create({
            data: {
                transaction_id: shopTransactionObject.transaction_id,
                total_amount: shopTransactionObject.transaction_id,
                card_id: shopTransactionObject.card_id,
                card_brand: shopTransactionObject.card_brand,
                card_exp_month: shopTransactionObject.card_exp_month,
                card_exp_year: shopTransactionObject.card_exp_year,
                card_last4: shopTransactionObject.card_last4,
                currency: shopTransactionObject.currency,
                paid: shopTransactionObject.paid,
                products_amount: shopTransactionObject.products_amount,
                products: shopTransactionObject.products,
                stripe_customer_id: shopTransactionObject.stripe_customer_id,
                user_id: shopTransactionObject.user_id,
                user_email: shopTransactionObject.user_email,
                user_phone: shopTransactionObject.customer_phone,
                user_name: shopTransactionObject.customer_name,
                shipping_address_zipcode:
                    shopTransactionObject.shipping_address_zipcode,
                shipping_address_street:
                    shopTransactionObject.shipping_address_customer_street,
                shipping_address_street_number:
                    shopTransactionObject.shipping_address_street_number,
                shipping_address_neighborhood:
                    shopTransactionObject.shipping_address_customer_neighborhood,
                shipping_address_city:
                    shopTransactionObject.shipping_address_customer_city,
                shipping_address_state:
                    shopTransactionObject.shipping_address_customer_state,
                shipping_address_country:
                    shopTransactionObject.shipping_address_country,
                shippig_carrier: shopTransactionObject.shipping_carrier,
                shipping_fee: shopTransactionObject.shipping_fee,
            },
        });
    }
}

export default new StripeModel();
