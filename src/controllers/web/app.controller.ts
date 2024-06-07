import { Request, Response } from "express";

import Header from "../../utils/Header";
import edge from "../../config/edge";

export default class AppController {
    static async getViewPrivacy(req: Request, res: Response) {
        return res.setHeader("Content-Type", "text/html").end(
            await edge.render("pages/privacy", {
                user: global.SESSION_USER,
                header: Header.privacy(),
            }),
        );
    }
}
