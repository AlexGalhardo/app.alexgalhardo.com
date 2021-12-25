/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * http://localhost:3000/profile
 */

import { Router, Request, Response, NextFunction } from 'express';

import ProfileController from '../controllers/ProfileController';

const router = Router();

const userIsNotLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.userID) {
        req.flash('warning', 'You need to login first');
        return res.redirect('/login');
    }
    next();
};

export default router
    .get(
        '/',
        userIsNotLoggedIn,
        // csrfProtection,
        ProfileController.getViewProfile
    )

    .post(
        '/',
        userIsNotLoggedIn,
        // csrfProtection,
        ProfileController.updateProfile
    )

    .post(
        '/avatar',
        userIsNotLoggedIn,
        // upload.single('avatar'),
        ProfileController.updateProfileAvatar
    )

    /* .get(
        '/shopCart/game/:game_id',
        userIsNotLoggedIn,
        ProfileController.getAddShopCartGame
    ) */

    .get(
        '/shop/transactions',
        userIsNotLoggedIn,
        ProfileController.getViewMyShopTransactions
    )

    .get(
        '/shop/transaction/:shop_transaction_id',
        userIsNotLoggedIn,
        ProfileController.getViewShopTransactionByID
    )

    .get(
        '/subscriptions/transactions',
        userIsNotLoggedIn,
        ProfileController.getViewMySubscriptionsTransactions
    )

    .get(
        '/subscription/transaction/:subs_transaction_id',
        userIsNotLoggedIn,
        ProfileController.getViewSubscriptionTransactionByID
    )

    .get('/logout', userIsNotLoggedIn, ProfileController.logout)

    .get(
        '/delete/stripeCard/:stripe_card_id',
        userIsNotLoggedIn,
        ProfileController.deleteStripeCard
    )

    .get(
        '/cancel/subscription/:stripe_currently_subscription_id',
        userIsNotLoggedIn,
        ProfileController.cancelStripeSubscriptionRenewAtPeriodEnd
    );
