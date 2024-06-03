import fs from "fs-extra";
import handlebars from "handlebars";
import path from "path";

import Resend from "../config/smtp";
import Users from "../repositories/users.repository";
import { ShopTransactionDTO, SubscriptionTransactionDTO, SendContactDTO } from "./DTOs";
import DateTime from "./DateTime";

export default class NodeMailer {
    static async sendContact({ name, email, subject, message }: SendContactDTO) {
        const filePath = path.join(__dirname, "../views/emails/contact.html");

        const source = fs.readFileSync(filePath, "utf-8").toString();

        const template = handlebars.compile(source);

        const replacements = {
            name,
            email,
            subject,
            message,
        };

        const htmlBody = template(replacements);

        const messageSend = await Resend.sendMail({
            from: email,
            to: process.env.APP_EMAIL,
            subject: `Galhardo APP Contact: ${subject} from ${name}`,
            text: subject,
            html: htmlBody,
        });
    }

    static async sendShopTransaction({
        transaction_id,
        card_id,
        paid,
        products,
        products_amount,
        shipping_fee,
        total_amount,
        shipping_address_zipcode,
        shipping_address_street,
        shipping_address_neighborhood,
        shipping_address_city,
        shipping_address_state,
    }: ShopTransactionDTO) {
        const filePath = path.join(__dirname, "../views/emails/shop_transaction.html");

        const source = fs.readFileSync(filePath, "utf-8").toString();

        const template = handlebars.compile(source);

        const replacements = {
            transaction_id,
            payment_method: card_id,
            paid: paid,
            products: JSON.stringify(products),
            total_products: products_amount,
            shipping_fee,
            amount: total_amount,
            shipping_address_zipcode,
            shipping_address_street,
            shipping_address_neighborhood,
            shipping_address_city,
            shipping_address_state,
            created_at: DateTime.getNow(),
        };

        const htmlBody = template(replacements);

        await Resend.sendMail({
            from: process.env.APP_EMAIL,
            to: "aleexgvieira@gmail.com", // shopTransactionObject.customer.email,
            subject: `Galhardo APP: Shop Transaction Success!`,
            html: htmlBody,
        });

        Resend.close();
    }

    static async sendSubscriptionTransaction({
        transaction_id,
        status,
        plan_name,
        plan_amount,
        card_id,
        card_brand,
        card_exp_month,
        card_exp_year,
        card_last4,
        current_period_start,
        current_period_end,
    }: SubscriptionTransactionDTO) {
        const filePath = path.join(__dirname, "../views/emails/subscription_transaction.html");

        const source = fs.readFileSync(filePath, "utf-8").toString();

        const template = handlebars.compile(source);

        const replacements = {
            transaction_id,
            status,
            plan_name,
            amount: Number(plan_amount / 100).toFixed(2),
            card_id,
            card_brand,
            card_exp_month,
            card_exp_year,
            card_last4,
            current_period_start,
            current_period_end,
            created_at: DateTime.getNow(),
        };

        const htmlBody = template(replacements);

        await Resend.sendMail({
            from: process.env.APP_EMAIL,
            to: "aleexgvieira@gmail.com", // subsTransactionObject.customer.email,
            subject: `Galhardo APP: Subscription Transaction Success!`,
            html: htmlBody,
        });

        Resend.close();
    }

    static async sendConfirmEmailLink(email: string, confirmEmailToken: string) {
        const confirmEmailLinkURL = `${process.env.APP_URL}/confirmEmail/${email}/${confirmEmailToken}`;

        const filePath = path.join(__dirname, "../views/emails/confirm_email.html");

        const source = fs.readFileSync(filePath, "utf-8").toString();

        const template = handlebars.compile(source);

        const replacements = {
            confirmEmailLinkURL,
        };

        const htmlBody = template(replacements);

        await UsersRepository.createConfirmEmailToken(email, confirmEmailToken);

        await Resend.sendMail({
            from: process.env.APP_EMAIL,
            to: email,
            subject: `GALHARDO APP: Confirm Your Email!`,
            html: htmlBody,
        });

        Resend.close();
    }

    static async sendForgetPasswordLink(email: string, resetPasswordToken: string) {
        const resetPasswordLinkURL = `${process.env.APP_URL}/resetPassword/${email}/${resetPasswordToken}`;

        const filePath = path.join(__dirname, "../views/emails/forget_password.html");

        const source = fs.readFileSync(filePath, "utf-8").toString();

        const template = handlebars.compile(source);

        const replacements = {
            resetPasswordLinkURL,
        };

        const htmlBody = template(replacements);

        await Resend.sendMail({
            from: process.env.APP_EMAIL,
            to: email,
            subject: `GALHARDO APP: Recover Your Password!`,
            html: htmlBody,
        });

        Resend.close();
    }
}
