import { Request, Response } from "express";

import Header from "../../utils/Header";
import edge from "../../config/edge";

export default class AppController {
	static getViewPrivacy(req: Request, res: Response) {
		return res.render("pages/privacy", {
			user: global.SESSION_USER,
			header: Header.privacy(),
		});
	}

	static async teste(req: Request, res: Response) {
		try {
			return res
				.setHeader('Content-Type', 'text/html')
				.end(await edge.render('pages/teste', {
					user: {
						fullName: null, //'alex galhardo',
						firstName: 'alex'
					},
					age: 19
				}));
		} catch (error: any) {
			res.status(500).send(error.message);
		}
	}
}
