import { Router } from "express";

import ProfileController from "../controllers/web/profile.controller";
import { isNotAuthenticated } from "./public.routes";

const router = Router();

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
