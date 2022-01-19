/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';
import { unlink } from 'fs/promises';
import sharp from 'sharp';

import Users from '../models/Users';

export default class Upload {
    static async profileAvatar(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            if (
                (req.file && req.file.mimetype === 'image/jpeg') ||
                req.file.mimetype === 'image/jpg' ||
                req.file.mimetype === 'image/png'
            ) {
                const filename = `${req.file.filename}.jpeg`;
                await sharp(req.file.path)
                    .resize(200, 200)
                    .toFormat('jpeg')
                    .toFile(`src/public/uploads/avatars/${filename}`);

                await unlink(req.file.path);

                if (global.SESSION_USER.avatar !== 'avatar.png') {
                    const oldProfileAvatarPath = `src/public/uploads/avatars/${global.SESSION_USER.avatar}`;
                    await unlink(oldProfileAvatarPath);
                }

                global.SESSION_USER = await Users.updateAvatarName(
                    `${filename}`,
                    global.SESSION_USER.id
                );

                req.session.userID = global.SESSION_USER.id;

                return null;
            }
        } catch (error) {
            return next(error);
        }
    }
}
