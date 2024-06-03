import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import Header from "../../utils/Header";
import NodeMailer from "../../utils/NodeMailer";
import edge from "../../config/edge";
// import TelegramBOTLogger from "../utils/TelegramBOTLogger";

export default class ContactController {
	static async getViewContact(req: Request, res: Response) {
		try {
			return res.setHeader("Content-Type", "text/html").end(
				await edge.render("pages/contact", {
					flash_success: req.flash("success").length ? req.flash("success")[0] : null,
					flash_warning: req.flash("warning").length ? req.flash("warning")[0] : null,
					user: global.SESSION_USER,
					header: Header.contact(),
					captcha: res.recaptcha,
					csrfToken: req.csrfToken(),
				}),
			);
		} catch (error: any) {
			res.status(500).send(error.message);
		}
	}

	static async postContact(req: Request, res: Response, next: NextFunction) {
		try {
			const errors = validationResult(req);

			if (!req.recaptcha?.error) {
				if (!errors.isEmpty()) {
					req.flash("warning", `${errors.array()[0].msg}`);
					return res.redirect("/contact");
				}
			} else {
				req.flash("warning", `Invalid Recaptcha!`);
				return res.redirect("/contact");
			}

			const { name, email, subject, message } = req.body;

			const contactObject = {
				name,
				email,
				subject,
				message,
			};

			await NodeMailer.sendContact(contactObject);
			// await TelegramBOTLogger.logContact(contactObject);

			req.flash("success", "Message Send!");
			return res.redirect("/contact");
		} catch (error) {
			next(error);
		}
	}
}
