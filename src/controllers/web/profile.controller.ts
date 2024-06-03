import { Request, Response } from "express";

import Header from "../../utils/Header";
import { UpdateUserDTO } from "../../utils/DTOs";
import StripeRepository from "../../repositories/stripe.repository";
import UsersRepository from "../../repositories/users.repository";
import edge from "../../config/edge";

export default class ProfileController {
    static async getViewProfile(req: Request, res: Response) {
        try {
            return res.setHeader("Content-Type", "text/html").end(
                await edge.render("pages/profile/profile", {
                    flash_success: req.flash("success").length ? req.flash("success")[0] : null,
                    flash_warning: req.flash("warning").length ? req.flash("warning")[0] : null,
                    user: global.SESSION_USER,
                    header: Header.profile("My Profile "),
                }),
            );
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static logout(req: Request, res: Response) {
        req.session.destroy((error) => {
            if (error) throw new Error(error);
        });
        global.SESSION_USER = null;
        return res.redirect("/login");
    }

    static async updateProfile(req: Request, res: Response) {
        const {
            username,
            email,
            document,
            phone,
            birth_date,
            older_password,
            new_password,
            zipcode,
            street,
            street_number,
            neighborhood,
            state,
            city,
            country,
        } = req.body;

        const userObject: UpdateUserDTO = {
            id: global.SESSION_USER.id,
            username,
            email,
            document,
            phone,
            birth_date,
            older_password,
            new_password,
            address_zipcode: zipcode,
            address_street: street,
            address_street_number: street_number,
            address_neighborhood: neighborhood,
            address_state: state,
            address_city: city,
            address_country: country,
        };

        if (await UsersRepository.update(userObject)) {
            req.flash("success", "Profile Information Updated!");
            return res.redirect("/profile");
        }

        req.flash("warning", "Something went wrong");
        return res.redirect("/profile");
    }

    static async getViewMyShopTransactions(req: Request, res: Response) {
        const shopTransactions = await StripeRepository.getShopTransactionsByUserId(global.SESSION_USER.id);

        return res.render("pages/profile/my_shop_transactions", {
            user: global.SESSION_USER,
            shopTransactions,
            header: Header.profile("My Shop Transactions "),
        });
    }

    static async getViewShopTransactionByID(req: Request, res: Response) {
        const { shop_transaction_id } = req.params;

        const shopTransaction = await StripeRepository.getShopTransactionById(shop_transaction_id);

        shopTransaction!.products = JSON.parse(shopTransaction!.products);

        return res.render("pages/profile/shop_transaction", {
            user: global.SESSION_USER,
            shopTransaction,
            header: Header.profile("Shop Transaction "),
        });
    }

    static async getViewMySubscriptionsTransactions(req: Request, res: Response) {
        const subsTransactions = await StripeRepository.getSubscriptionsTransactionsByUserId(global.SESSION_USER.id);

        return res.render("pages/profile/my_subs_transactions", {
            user: global.SESSION_USER,
            subsTransactions,
            header: Header.profile("My Subscriptions Transactions "),
        });
    }

    static async getViewSubscriptionTransactionByID(req: Request, res: Response) {
        const { subs_transaction_id } = req.params;

        const subsTransaction = await StripeRepository.getSubscriptionTransactionById(subs_transaction_id);

        return res.render("pages/profile/sub_transaction", {
            user: global.SESSION_USER,
            subsTransaction,
            header: Header.profile("Subs Transaction "),
        });
    }

    static async deleteCard(req: Request, res: Response) {
        const { stripe_card_id } = req.params;

        await StripeRepository.deleteCard(global.SESSION_USER.id, stripe_card_id);

        req.flash("success", "Stripe Card Deleted!");
        return res.redirect("/profile");
    }

    static async cancelSubscriptionRenewAtPeriodEnd(req: Request, res: Response) {
        const { stripe_currently_subscription_id } = req.params;

        await StripeRepository.cancelSubscriptionRenewAtPeriodEnd(
            global.SESSION_USER.id,
            stripe_currently_subscription_id,
        );

        req.flash("success", "Canceled Subscription Renew At Period End!");
        return res.redirect("/profile");
    }
}
