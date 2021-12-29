/* eslint-disable consistent-return */
/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * http://localhost:3000/contact
 */

import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

import Header from '../helpers/Header';
import NodeMailer from '../helpers/NodeMailer';
import TelegramBOTLogger from '../helpers/TelegramBOTLogger';

class ContactController {
    getViewContact(req: Request, res: Response) {
        res.render('pages/contact', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            user: SESSION_USER,
            header: Header.contact(),
            captcha: res.recaptcha,
            csrfToken: req.csrfToken(),
        });
    }

    async postContact(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                req.flash('warning', `${errors.array()[0].msg}`);
                return res.redirect('/contact');
            }

            const { name, email, subject, message } = req.body;

            const contactObject = {
                name,
                email,
                subject,
                message,
            };

            await NodeMailer.sendContact(contactObject);
            await TelegramBOTLogger.logContact(contactObject);

            req.flash('success', 'Message Send!');
            return res.redirect('/contact');
        } catch (error) {
            next(error);
        }
    }
}

export default new ContactController();
