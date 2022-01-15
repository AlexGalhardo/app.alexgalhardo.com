import { unlink } from 'fs/promises';
import multer from 'multer';
import sharp from 'sharp';
import { Request } from 'express'

import multerConfig from '../config/multer';

export default class Upload {
    static async profileAvatar(req: Request) {
        // todo
        /* if (req.file) {
            const filename = `${req.file.filename}.jpg`;

            await sharp(req.file.path)
                .resize(200, 200)
                .toFormat('jpeg')
                .toFile(`./public/uploads/avatars/${filename}`);

            await unlink(req.file.path);

            await Users.updateAvatarName(
                `${req.file.filename}.jpg`,
                req.session.userID
            );
        } else {
            return res.status(400).json({ error: 'Invalid file type.' });
        }*/
    }
}
