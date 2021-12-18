/**
 * GALHARDO APP | https://galhardoapp.com
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 *
 * ./helpers/Upload.js
 */

import { unlink } from 'fs/promises';
import multer from 'multer';
import sharp from 'sharp';

import multerConfig from '../config/multer';
import Users from '../models/JSON/Users';

class Upload {
    static async profileAvatar(req) {
        if (req.file) {
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
        }
    }
}

export default Upload;
