/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * PUBLIC ROUTES
 * http://localhost:3000/
 */

import csrf from 'csurf';
import dotenv from 'dotenv';
import { Router, Request, Response, NextFunction } from 'express';

// import Recaptcha from 'express-recaptcha';
import swaggerUI from 'swagger-ui-express';

import AppController from '../controllers/AppController';
import AuthController from '../controllers/AuthController';
import BlogController from '../controllers/BlogController';
import CriptoBOTController from '../controllers/CriptoBOTController';
import PlansController from '../controllers/PlansController';
import ShopController from '../controllers/ShopController';
import docs from '../docs/index';

dotenv.config();

const csrfProtection = csrf({ cookie: true });
const router = Router();

const userIsAlreadyLoggedIn = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.session.userID) {
        req.flash('warning', 'You need to logout first');
        return res.redirect('/');
    }
    next();
};

const userIsNotLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.userID) {
        req.flash('warning', 'You need to login first');
        return res.redirect('/login');
    }
    next();
};

const verifyIfUserHasActiveSubscription = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (SESSION_USER.stripe_currently_subscription_name !== 'FREE') {
        req.flash(
            'warning',
            `You already have a currently plan ${SESSION_USER.stripe_currently_subscription_name} active! Wait until it ends to make a new subscription transaction!`
        );
        return res.redirect('/plans');
    }
    next();
};

router.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(docs, { explorer: true })
);

router
    .get('/', AppController.getViewHome)
    .get('/projects', AppController.getViewProjects)
    .get('/bank', AppController.getViewBank)
    .get('/toDo', AppController.getViewToDo)
    .get('/books', AppController.getViewBooks)
    .get('/movies', AppController.getViewMovies)
    .get('/tvshows', AppController.getViewTVShows)
    .get('/about', AppController.getViewAbout)
    .get('/criptoBOT', AppController.getViewCriptoBOT)

    .get('/contact', csrfProtection, AppController.getViewContact)
    .post('/contact', csrfProtection, AppController.postContact)

    .get('/privacy', AppController.getViewPrivacy)

    .get('/searchGame', AppController.getSearchGameTitle)
    .get('/searchBook', AppController.getSearchBookTitle)

    .get('/blog', BlogController.getViewBlog)
    .get('/blog/search', BlogController.getSearchBlogTitle)
    .get('/blog/page/:page', BlogController.getViewBlog)

    .get('/blog/:slug', BlogController.getViewBlogPost)
    .post('/blog/:slug', BlogController.postBlogComment)

    .get(
        '/blog/:slug/deleteComment/:comment_id',
        BlogController.getDeleteBlogCommentByCommentID
    )

    .get('/newsletter-confirm-email', (req, res) => {
        req.flash(
            'success',
            'Confirm your newsletter subscription by clicking in the link send to your email inbox!'
        );
        return res.redirect('/');
    })
    .get('/newsletter-email-confirmed', (req, res) => {
        req.flash(
            'success',
            'Your newsletter subscription was confirmed! Welcome aboard :D'
        );
        return res.redirect('/');
    })

    .get('/shop', ShopController.getViewShop)
    .post('/shop', ShopController.postShopPayLog)

    .post('/criptoBOT/:side/:symbol/:quantity', CriptoBOTController.postBinance)

    .get('/plans', PlansController.getViewPlans)

    .get(
        '/plan/pro/checkout',
        userIsNotLoggedIn,
        verifyIfUserHasActiveSubscription,
        PlansController.getViewPlanProCheckout
    )
    .post(
        '/plan/pro/checkout',
        userIsNotLoggedIn,
        PlansController.postSubscription
    )

    .get(
        '/plan/premium/checkout',
        userIsNotLoggedIn,
        verifyIfUserHasActiveSubscription,
        PlansController.getViewPlanPremiumCheckout
    )
    .post(
        '/plan/premium/checkout',
        userIsNotLoggedIn,
        PlansController.postSubscription
    )

    .get(
        '/login',
        userIsAlreadyLoggedIn,
        csrfProtection,
        AuthController.getViewLogin
    )
    .post(
        '/login',
        userIsAlreadyLoggedIn,
        csrfProtection,
        AuthController.postLogin
    )

    .get(
        '/register',
        userIsAlreadyLoggedIn,
        csrfProtection,
        AuthController.getViewRegister
    )
    .post(
        '/register',
        userIsAlreadyLoggedIn,
        csrfProtection,
        AuthController.postRegister
    )

    .get(
        '/forgetPassword',
        userIsAlreadyLoggedIn,
        AuthController.getViewForgetPassword
    )
    .post(
        '/forgetPassword',
        userIsAlreadyLoggedIn,
        AuthController.postForgetPassword
    )

    .get(
        '/confirmEmail/:email/:token',
        AuthController.verifyIfConfirmEmailURLIsValid
    )

    .get('/confirmEmail', AuthController.getViewResendConfirmEmailLink)
    .post('/confirmEmail', AuthController.postSendConfirmEmailLink)

    .get(
        '/resetPassword/:email/:token',
        userIsAlreadyLoggedIn,
        AuthController.getViewResetPassword
    )
    .post(
        '/resetPassword',
        userIsAlreadyLoggedIn,
        AuthController.postResetPassword
    )

    .get('/github/callback', userIsAlreadyLoggedIn, AuthController.loginGitHub)
    .get(
        '/facebook/callback',
        userIsAlreadyLoggedIn,
        AuthController.loginFacebook
    )
    .get('/google/callback', userIsAlreadyLoggedIn, AuthController.loginGoogle);

export default router;
