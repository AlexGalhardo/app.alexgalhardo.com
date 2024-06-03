import csrf from "csurf";
import { Router, Request, Response, NextFunction } from "express";
import { RecaptchaV3 } from "express-recaptcha";

import AppController from "../controllers/web/app.controller";
import AuthController from "../controllers/web/auth.controller";
import BlogController from "../controllers/web/blog.controller";
import BooksController from "../controllers/web/books.controller";
import ContactController from "../controllers/web/contact.controller";
import GamesController from "../controllers/web/games.controller";
import MoviesController from "../controllers/web/movies.controller";
import PlansController from "../controllers/web/plans.controller";
import ShopController from "../controllers/web/shop.controller";
import TVShowsController from "../controllers/web/tv-shows.controller";

const recaptcha = new RecaptchaV3(process.env.RECAPTCHA_ID as string, process.env.RECAPTCHA_SECRET as string, {
    callback: "cb",
});

const csrfProtection = csrf({ cookie: true });
const router = Router();

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (global.SESSION_USER) {
        req.flash("warning", "You need to logout first");
        return res.redirect("/");
    }
    return next();
};

const isNotAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (!global.SESSION_USER) {
        req.flash("warning", "You need to login first");
        return res.redirect("/login");
    }
    return next();
};

export { isNotAuthenticated };

const userHasActiveSubscription = (req: Request, res: Response, next: NextFunction) => {
    if (global.SESSION_USER.stripe_currently_subscription_name !== "FREE") {
        req.flash(
            "warning",
            `You already have a currently plan ${global.SESSION_USER.stripe_currently_subscription_name} active! Wait until it ends to make a new subscription transaction!`,
        );
        return res.redirect("/plans");
    }
    return next();
};

router
    .get("/teste", AppController.teste)
    .get("/", GamesController.getViewGames)
    .get("/books", BooksController.getViewBooks)
    .get("/movies", MoviesController.getViewMovies)
    .get("/tvshows", TVShowsController.getViewTVShows)

    .get("/contact", recaptcha.middleware.render, csrfProtection, ContactController.getViewContact)
    .post("/contact", recaptcha.middleware.verify, csrfProtection, ContactController.postContact)

    .get("/privacy", AppController.getViewPrivacy)

    .get("/searchGame", GamesController.getSearchGameTitle)
    .get("/searchBook", BooksController.getSearchBookTitle)
    .get("/searchMovie", MoviesController.getSearchMovieTitle)
    .get("/searchTVShow", TVShowsController.getSearchTVShowTitle)

    .get("/blog", BlogController.getViewBlog)
    .get("/blog/search", BlogController.getSearchBlogTitle)
    .get("/blog/page/:page", BlogController.getViewBlog)

    .get("/blog/:slug", BlogController.getViewBlogPost)

    .get("/shop", isNotAuthenticated, ShopController.getViewShop)
    .post("/shop", isNotAuthenticated, ShopController.postShop)
    .get("/removeCart/:item_id", ShopController.removeCartItem)

    .get("/plans", PlansController.getViewPlans)

    .get(
        "/plan/premium/checkout",
        isNotAuthenticated,
        userHasActiveSubscription,
        PlansController.getViewPlanPremiumCheckout,
    )
    .post("/plan/premium/post", isNotAuthenticated, PlansController.postSubscription)

    .get("/login", isAuthenticated, /* recaptcha.middleware.render, */ csrfProtection, AuthController.getViewLogin)
    .post("/login", isAuthenticated, /* recaptcha.middleware.verify, */ csrfProtection, AuthController.postLogin)

    .get("/register", isAuthenticated, recaptcha.middleware.render, csrfProtection, AuthController.getViewRegister)
    .post("/register", isAuthenticated, recaptcha.middleware.verify, csrfProtection, AuthController.postRegister)

    .get("/forgetPassword", isAuthenticated, AuthController.getViewForgetPassword)
    .post("/forgetPassword", isAuthenticated, AuthController.postForgetPassword)

    .get("/confirmEmail/:email/:token", AuthController.getVerifyIfConfirmEmailURLIsValid)

    .get("/confirmEmail", AuthController.getViewResendConfirmEmailLink)
    .post("/confirmEmail", AuthController.postSendConfirmEmailLink)

    .get("/resetPassword/:email/:token", isAuthenticated, AuthController.getViewResetPassword)

    .get("/resetPassword/:any", isAuthenticated, AuthController.sendToForgetPassword)

    .get("/resetPassword", isAuthenticated, AuthController.sendToForgetPassword)

    .post("/resetPassword", isAuthenticated, AuthController.postResetPassword);

export default router;
