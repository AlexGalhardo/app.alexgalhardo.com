import { Request, Response } from "express";

import Header from "../../utils/Header";
import { UpdateUserDTO } from "../../utils/DTOs";
import UsersRepository from "../../repositories/users.repository";
import edge from "../../config/edge";

export default class ProfileController {
    static async getViewProfile(req: Request, res: Response) {
        try {
            return res.setHeader("Content-Type", "text/html").end(
                await edge.render("pages/profile/profile", {
                    flash_success: req.flash("success").length ? req.flash("success")[0] : null,
                    flash_warning: req.flash("warning").length ? req.flash("warning")[0] : null,
                    user: global.SESSION_USER,
                    header: Header.profile("My Profile "),
                }),
            );
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static logout(req: Request, res: Response) {
        req.session.destroy((error) => {
            if (error) throw new Error(error);
        });
        global.SESSION_USER = null;
        return res.redirect("/login");
    }

    static async updateProfile(req: Request, res: Response) {
        const { username, email } = req.body;

        const userObject: UpdateUserDTO = {
            id: global.SESSION_USER.id,
            username,
            email,
        };

        if (await UsersRepository.update(userObject)) {
            req.flash("success", "Profile Information Updated!");
            return res.redirect("/profile");
        }

        req.flash("warning", "Something went wrong");
        return res.redirect("/profile");
    }
}
