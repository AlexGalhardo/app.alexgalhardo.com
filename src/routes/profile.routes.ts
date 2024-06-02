import { Router, Request, Response, NextFunction } from "express";

import ProfileController from "../controllers/profile.controller";

const router = Router();

const isNotAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.id) {
        req.flash("warning", "You need to login first");
        return res.redirect("/login");
    }
    next();
};

export default router
    .get("/", isNotAuthenticated, ProfileController.getViewProfile)

    .post("/", isNotAuthenticated, ProfileController.updateProfile)

    .get("/shop/transactions", isNotAuthenticated, ProfileController.getViewMyShopTransactions)

    .get("/shop/transaction/:shop_transaction_id", isNotAuthenticated, ProfileController.getViewShopTransactionByID)

    .get("/subscriptions/transactions", isNotAuthenticated, ProfileController.getViewMySubscriptionsTransactions)

    .get(
        "/subscription/transaction/:subs_transaction_id",
        isNotAuthenticated,
        ProfileController.getViewSubscriptionTransactionByID,
    )

    .get("/logout", isNotAuthenticated, ProfileController.logout)

    .get("/delete/stripeCard/:stripe_card_id", isNotAuthenticated, ProfileController.deleteStripeCard)

    .get(
        "/cancel/subscription/:stripe_currently_subscription_id",
        isNotAuthenticated,
        ProfileController.cancelStripeSubscriptionRenewAtPeriodEnd,
    );
