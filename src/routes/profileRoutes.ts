import { Router, Request, Response, NextFunction } from 'express';
import multer from 'multer';

import ProfileController from '../controllers/ProfileController';

const router = Router();

const userIsNotLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.userID) {
        req.flash('warning', 'You need to login first');
        return res.redirect('/login');
    }
    next();
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/uploads/avatars/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const uploadProfileAvatar = multer({
    dest: 'src/public/uploads/avatars/',
    // storage,
}).single('avatar');

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
        uploadProfileAvatar,
        ProfileController.updateProfileAvatar
    )

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
