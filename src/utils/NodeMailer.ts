import fs from "fs-extra";
import handlebars from "handlebars";
import path from "path";

import Resend from "../config/smtp";
import { SendContactDTO } from "./DTOs";
import UsersRepository from "../repositories/users.repository";

export default class NodeMailer {
    static async sendContact({ name, email, subject, message }: SendContactDTO) {
        try {
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

            await Resend.sendMail({
                from: email,
                to: process.env.APP_EMAIL,
                subject: `app.alexgalhardo.com Contact: ${subject} from ${name}`,
                text: message,
                html: htmlBody,
            });
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    static async sendConfirmEmailLink(email: string, confirmEmailToken: string) {
        const confirmEmailLinkURL = `${process.env.APP_URL}/confirm-email/${email}/${confirmEmailToken}`;

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
    }

    static async sendForgetPasswordLink(email: string, resetPasswordToken: string) {
        try {
            const resetPasswordLinkURL = `${process.env.APP_URL}/change-password/${email}/${resetPasswordToken}`;

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
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}
