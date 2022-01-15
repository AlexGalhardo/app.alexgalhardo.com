import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import queryString from 'query-string';
import randomToken from 'rand-token';

import NodeMailer from '../helpers/NodeMailer';
import URL from '../helpers/URL';
import Users from '../models/Users';

class AuthController {
    async getViewLogin(req: Request, res: Response) {
        const facebookLoginURL = await URL.getFacebookURL();

        return res.render('pages/auth/login', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            FacebookLoginURL: facebookLoginURL,
            GitHubLoginURL: URL.getGitHubURL,
            GoogleLoginURL: URL.getGoogleURL,
            captcha: res.recaptcha,
            csrfToken: req.csrfToken(),
        });
    }

    async postLogin(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                req.flash('warning', `${errors.array()}`);
                return res.redirect('/login');
            }

            const { email, password } = req.body;

            const user = await Users.login(email, password);

            if (user) {
                const confirmedEmail = await Users.emailIsConfirmed(email);

                if (!confirmedEmail) {
                    req.flash('warning', `You need to confirm your email!`);
                    return res.redirect('/login');
                }
            } else {
                req.flash('warning', `Email OR Password Inválid!`);
                return res.redirect('/login');
            }

            req.session.userID = user.id;
            global.SESSION_USER = user;
            req.flash('success', `Welcome back, ${user.name} :D`);
            return res.redirect('/');
        } catch (error) {
            next(error);
        }
    }

    getViewRegister(req: Request, res: Response) {
        return res.render('pages/auth/register', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            csrfToken: req.csrfToken(),
            captcha: res.recaptcha,
            app_url: process.env.APP_URL,
        });
    }

    async postRegister(req: Request, res: Response, next) {
        try {
            /* if (!req.recaptcha.error) {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    req.flash('warning', errors.array()[0].msg);
                    return res.redirect('/register');
                }
            } else {
                req.flash('warning', 'Invalid Recaptcha!');
                return res.redirect('/register');
            } */

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                req.flash('warning', errors.array()[0].msg);
                return res.redirect('/register');
            }

            const {
                username,
                email,
                password,
                confirm_password,
                github_id,
                facebook_id,
                google_id,
            } = req.body;

            const confirmEmailToken = randomToken.generate(24);

            const userObject = {
                username,
                email,
                password,
                confirm_password,
                github_id,
                facebook_id,
                google_id,
                confirmEmailToken,
            };

            await Users.create(userObject, confirmEmailToken);
            await NodeMailer.sendConfirmEmailLink(email, confirmEmailToken);

            req.flash(
                'success',
                'Account Created! Confirm your email by clicking the link send to your email inbox!'
            );
            return res.redirect('/login');
        } catch (error) {
            throw new Error(error);
        }
    }

    getViewForgetPassword(req: Request, res: Response) {
        return res.render('pages/auth/forgetPassword', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
        });
    }

    async postForgetPassword(req: Request, res: Response) {
        const { email } = req.body;

        const resetPasswordToken = randomToken.generate(24);

        if (await Users.emailExists(email)) {
            await Users.createResetPasswordToken(email, resetPasswordToken);
            await NodeMailer.sendForgetPasswordLink(email, resetPasswordToken);
        }

        req.flash(
            'success',
            `If this email exists, we'll send a link to this email to recover password!`
        );
        return res.redirect('/forgetPassword');
    }

    async sendToForgetPassword(req: Request, res: Response) {
        return res.redirect('/forgetPassword');
    }

    async getViewResetPassword(req: Request, res: Response) {
        const { email, token } = req.params;

        if (!email || !token) {
            return res.redirect('/forgetPassword');
        }

        if (!(await Users.resetPasswordTokenIsValid(email, token))) {
            return res.redirect('/forgetPassword');
        }

        return res.render('pages/auth/resetPassword', {
            email,
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
        });
    }

    async postResetPassword(req: Request, res: Response) {
        const { email, new_password } = req.body;

        if (!(await Users.resetPassword(email, new_password))) {
            return res.redirect('/forgetPassword');
        }

        req.flash('success', 'Password updated successfull!');
        return res.redirect('/login');
    }

    getViewResendConfirmEmailLink(req: Request, res: Response) {
        return res.render('pages/auth/confirmEmail', {
            flash_success: req.flash('success'),
        });
    }

    async postSendConfirmEmailLink(req: Request, res: Response) {
        const { email } = req.body;

        const confirmEmailToken = randomToken.generate(24);

        if (!(await Users.verifyIfEmailIsConfirmed(email))) {
            await NodeMailer.sendConfirmEmailLink(email, confirmEmailToken);
        }

        req.flash(
            'success',
            "If this email is registred and not confirmed yet, we'll send a link to confirm this email!"
        );
        return res.redirect('/confirmEmail');
    }

    async getVerifyIfConfirmEmailURLIsValid(req: Request, res: Response) {
        const { email, token } = req.params;

        if (await Users.verifyConfirmEmailToken(email, token)) {
            req.flash('success', 'Email confirmed!');
            return res.redirect('/login');
        }

        return res.redirect('/login');
    }

    async loginFacebook(req: Request, res: Response, next) {
        try {
            const url_query_code = req.query.code;

            const token = await facebookLogin.getAccessToken({
                code: `${url_query_code}`,
                fbAppID: process.env.FACEBOOK_CLIENT_ID,
                fbAppSecret: process.env.FACEBOOK_CLIENT_SECRET,
                redirectURI: process.env.FACEBOOK_CALLBACK_URL,
            });

            const facebookUser = await facebookLogin.getUserProfile({
                accessToken: `${token.access_token}`,
                fields: ['id', 'name', 'email'],
            });

            const user = await Users.verifyLoginFacebook(
                facebookUser.id,
                facebookUser.email
            );

            if (!user) {
                req.flash(
                    'warning',
                    'Create Your account Linked to Your Facebook Account'
                );
                return res.redirect('/register');
            }

            req.session.userID = user.id;
            global.SESSION_USER = user;
            return res.redirect('/');
        } catch (error) {
            throw new Error(error);
        }
    }

    async loginGitHub(req: Request, res: Response) {
        const { code } = req.query;

        try {
            const { data } = await axios({
                url: 'https://github.com/login/oauth/access_token',
                method: 'get',
                params: {
                    client_id: process.env.GITHUB_CLIENT_ID,
                    client_secret: process.env.GITHUB_CLIENT_SECRET,
                    redirect_uri: process.env.GITHUB_CALLBACK_URL,
                    code,
                },
            });

            const parsedData = queryString.parse(data);

            if (parsedData.error) throw new Error(parsedData.error_description);

            const response = await axios({
                url: 'https://api.github.com/user',
                method: 'GET',
                headers: {
                    Authorization: `token ${parsedData.access_token}`,
                },
            });

            const user = await Users.verifyLoginGitHub(
                response.data.id,
                response.data.email,
                response.data.avatar_url
            );

            if (!user) {
                req.flash(
                    'warning',
                    'Create Your account Linked to Your GitHub Account'
                );
                return res.redirect('/register');
            }

            req.session.userID = user.id;
            global.SESSION_USER = user;
            return res.redirect('/');
        } catch (error) {
            throw new Error(error);
        }
    }

    async loginGoogle(req: Request, res: Response) {
        const { code } = req.query;

        try {
            const { user } = await googleLogin.getUserProfile(`${code}`);

            const userRegistred = await Users.verifyLoginGoogle(
                user.sub,
                user.email,
                user.picture
            );

            if (!userRegistred) {
                req.flash(
                    'warning',
                    'Create Your account Linked to Your Google Account'
                );
                return res.redirect('/register');
            }

            req.session.userID = userRegistred.id;
            global.SESSION_USER = userRegistred;
            return res.redirect('/');
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new AuthController();
