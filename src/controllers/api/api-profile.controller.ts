import { Request, Response, NextFunction } from "express";

import UsersRepository from "../../repositories/users.repository";

export default class APIProfileController {
    static async postLogin(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            return res.json(await UsersRepository.login(email, password));
        } catch (err) {
            next(err);
        }
    }

    static async patchProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, email, new_email, password, new_password } = req.body;

            const userObject = {
                name,
                email,
                new_email,
                password,
                new_password,
            };

            const user = await UsersRepository.update(userObject);

            return user
                ? res.json({ success: true, user })
                : res.json({
                      success: false,
                      error: "Something went wrong",
                  });
        } catch (err) {
            next(err);
        }
    }

    static async deleteProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;

            const profileDeleted = await UsersRepository.delete(email, password);

            if (profileDeleted) {
                return res.json({
                    status: `Profile ${email} deleted!`,
                });
            }

            return res.json({
                status: "Profile NOT deleted! Some error occurred!",
            });
        } catch (err) {
            next(err);
        }
    }
}
