import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import randomToken from "rand-token";

import NodeMailer from "../../utils/NodeMailer";
import UsersRepository from "../../repositories/users.repository";
import edge from "../../config/edge";

export default class AuthController {
    static async getViewLogin(req: Request, res: Response) {
        try {
            return res.setHeader("Content-Type", "text/html").end(
                await edge.render("pages/auth/login", {
                    flash_success: req.flash("success").length ? req.flash("success")[0] : null,
                    flash_warning: req.flash("warning").length ? req.flash("warning")[0] : null,
                    captcha: res.recaptcha,
                    csrfToken: req.csrfToken(),
                }),
            );
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async postLogin(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);

            if (!req.recaptcha?.error) {
                if (!errors.isEmpty()) {
                    req.flash("warning", `${errors.array()[0].msg}`);
                    return res.redirect("/login");
                }
            } else {
                req.flash("warning", `Invalid Recaptcha!`);
                return res.redirect("/login");
            }

            const { email, password } = req.body;

            const user = await UsersRepository.login(email, password);

            if (user) {
                const confirmedEmail = await UsersRepository.emailIsConfirmed(email);

                if (!confirmedEmail) {
                    req.flash("warning", `You need to confirm your email!`);
                    return res.redirect("/login");
                }
            } else {
                req.flash("warning", `Email OR Password Inválid!`);
                return res.redirect("/login");
            }

            global.SESSION_USER = user;
            req.flash("success", `Welcome back, ${user.name} :D`);
            return res.redirect("/");
        } catch (error) {
            return next(error);
        }
    }

    static async getViewSignup(req: Request, res: Response) {
        try {
            const { username, email } = req.query;

            let email_readonly = null;
            if (email) email_readonly = true;

            return res.setHeader("Content-Type", "text/html").end(
                await edge.render("pages/auth/signup", {
                    flash_success: req.flash("success").length ? req.flash("success")[0] : null,
                    flash_warning: req.flash("warning").length ? req.flash("warning")[0] : null,
                    username,
                    email,
                    email_readonly,
                    csrfToken: req.csrfToken(),
                    captcha: res.recaptcha,
                    app_url: process.env.APP_URL,
                }),
            );
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async postSignup(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);

            if (!req.recaptcha?.error) {
                if (!errors.isEmpty()) {
                    req.flash("warning", errors.array()[0].msg);
                    return res.redirect("/signup");
                }
            } else {
                req.flash("warning", "Invalid Recaptcha!");
                return res.redirect("/signup");
            }

            const {
                username,
                email,
                password,
                confirm_password,
                github_id,
                github_avatar,
                facebook_id,
                facebook_avatar,
                google_id,
                google_avatar,
            } = req.body;

            const confirmEmailToken = randomToken.generate(24);

            const newUser = {
                username,
                email,
                password,
                confirm_password,
                github_id,
                github_avatar,
                facebook_id,
                facebook_avatar,
                google_id,
                google_avatar,
                confirmEmailToken,
            };

            await UsersRepository.create(newUser, confirmEmailToken);
            await NodeMailer.sendConfirmEmailLink(email, confirmEmailToken);

            req.flash("success", "Account Created! Confirm your email by clicking the link send to your email inbox!");
            return res.redirect("/login");
        } catch (error) {
            return next(error);
        }
    }

    static async getViewForgetPassword(req: Request, res: Response) {
        try {
            return res.setHeader("Content-Type", "text/html").end(
                await edge.render("pages/auth/forget-password", {
                    flash_success: req.flash("success").length ? req.flash("success") : null,
                    flash_warning: req.flash("warning").length ? req.flash("warning") : null,
                }),
            );
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async postForgetPassword(req: Request, res: Response) {
        try {
            const { email } = req.body;

            const resetPasswordToken = randomToken.generate(24);

            if (await UsersRepository.emailExists(email)) {
                await UsersRepository.createResetPasswordToken(email, resetPasswordToken);
                await NodeMailer.sendForgetPasswordLink(email, resetPasswordToken);
            }

            req.flash("success", `If this email exists, we'll send a link to this email to recover password!`);
            return res.redirect("/forget-password");
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    static async sendToForgetPassword(req: Request, res: Response) {
        return res.redirect("/forget-password");
    }

    static async getViewChangePassword(req: Request, res: Response) {
        try {
            const { email, token } = req.params;

            if (!email || !token) {
                return res.redirect("/forget-password");
            }

            if (!(await UsersRepository.resetPasswordTokenIsValid(email, token))) {
                return res.redirect("/forget-password");
            }

            return res.setHeader("Content-Type", "text/html").end(
                await edge.render("pages/auth/change-password", {
                    email,
                    flash_success: req.flash("success").length ? req.flash("success")[0] : null,
                    flash_warning: req.flash("warning").length ? req.flash("warning")[0] : null,
                }),
            );
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async postResetPassword(req: Request, res: Response) {
        const { email, new_password } = req.body;

        if (!(await UsersRepository.resetPassword(email, new_password))) {
            return res.redirect("/forget-password");
        }

        req.flash("success", "Password updated successfull!");
        return res.redirect("/login");
    }

    static async getViewResendConfirmEmailLink(req: Request, res: Response) {
        try {
            return res.setHeader("Content-Type", "text/html").end(
                await edge.render("pages/auth/confirm-email", {
                    flash_success: req.flash("success").length ? req.flash("success")[0] : null,
                }),
            );
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async postSendConfirmEmailLink(req: Request, res: Response) {
        const { email } = req.body;

        const confirmEmailToken = randomToken.generate(24);

        if (!(await UsersRepository.verifyIfEmailIsConfirmed(email))) {
            await NodeMailer.sendConfirmEmailLink(email, confirmEmailToken);
        }

        req.flash(
            "success",
            "If this email is registred and not confirmed yet, we'll send a link to confirm this email!",
        );
        return res.redirect("/confirm-email");
    }

    static async getVerifyIfConfirmEmailURLIsValid(req: Request, res: Response) {
        const { email, token } = req.params;

        if (await UsersRepository.verifyConfirmEmailToken(email, token)) {
            req.flash("success", "Email confirmed!");
            return res.redirect("/login");
        }

        return res.redirect("/login");
    }
}
