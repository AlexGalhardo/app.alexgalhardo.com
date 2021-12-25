/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * http://localhost:3000/profile
 */

import { Request, Response } from 'express';

import Header from '../helpers/Header';
import Upload from '../helpers/Upload';
import StripeModel from '../models/StripeModel';
import Users from '../models/Users';

class ProfileController {
    async getViewProfile(req: Request, res: Response) {
        return res.render('pages/profile/profile', {
            user: SESSION_USER,
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            header: Header.profile('My Profile - Galhardo APP'),
        });
    }

    logout(req: Request, res: Response) {
        req.session.destroy((error) => {
            if (error) throw new Error(error);
        });
        SESSION_USER = null;
        return res.redirect('/login');
    }

    async updateProfile(req: Request, res: Response) {
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

        const userObject = {
            id: SESSION_USER.id,
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
        };

        await Users.updateProfile(userObject);

        req.flash('success', 'Profile Information Updated!');
        return res.redirect('/profile');
    }

    async updateProfileAvatar(req: Request, res: Response) {
        await Upload.profileAvatar(req);
        res.redirect('/profile');
    }

    /* async getAddShopCartGame(req, res) {
        const { game_id } = req.params;
        await Users.shopCartAddGame(game_id);
    } */

    async getViewMyShopTransactions(req: Request, res: Response) {
        const shopTransactions = await StripeModel.getShopTransactionsByUserID(
            SESSION_USER.id
        );

        return res.render('pages/profile/my_shop_transactions', {
            user: SESSION_USER,
            shopTransactions,
            header: Header.profile('My Shop Transactions - Galhardo APP'),
        });
    }

    async getViewShopTransactionByID(req: Request, res: Response) {
        const { shop_transaction_id } = req.params;

        const shopTransaction = await StripeModel.getShopTransactionByID(
            shop_transaction_id
        );

        return res.render('pages/profile/shop_transaction', {
            user: SESSION_USER,
            shopTransaction,
            header: Header.profile('Shop Transaction - Galhardo APP'),
        });
    }

    async getViewMySubscriptionsTransactions(req: Request, res: Response) {
        const subsTransactions = await StripeModel.getSubsTransactionsByUserID(
            SESSION_USER.id
        );

        return res.render('pages/profile/my_subs_transactions', {
            user: SESSION_USER,
            subsTransactions,
            header: Header.profile(
                'My Subscriptions Transactions - Galhardo APP'
            ),
        });
    }

    async getViewSubscriptionTransactionByID(req: Request, res: Response) {
        const { subs_transaction_id } = req.params;

        const subsTransaction = await StripeModel.getSubsTransactionByID(
            subs_transaction_id
        );

        return res.render('pages/profile/sub_transaction', {
            user: SESSION_USER,
            subsTransaction,
            header: Header.profile('Subs Transaction - Galhardo APP'),
        });
    }

    async deleteStripeCard(req: Request, res: Response) {
        const { stripe_card_id } = req.params;

        await StripeModel.deleteStripeCard(SESSION_USER.id, stripe_card_id);

        req.flash('success', 'Stripe Card Deleted!');
        return res.redirect('/profile');
    }

    async cancelStripeSubscriptionRenewAtPeriodEnd(
        req: Request,
        res: Response
    ) {
        const { stripe_currently_subscription_id } = req.params;

        await StripeModel.cancelStripeSubscriptionRenewAtPeriodEnd(
            SESSION_USER.id,
            stripe_currently_subscription_id
        );

        req.flash('success', 'Canceled Subscription Renew At Period End!');
        return res.redirect('/profile');
    }
}

export default new ProfileController();
