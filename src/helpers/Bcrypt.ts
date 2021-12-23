/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * ./helpers/Bcrypt.js
 */

import bcrypt from 'bcryptjs';

class Bcrypt {
    static crypt(password: string) {
        return bcrypt
            .genSalt(12)
            .then((salt) => bcrypt.hash(password, salt))
            .then((hash) => hash);
    }

    static compare(password: string, hashPassword: string) {
        return bcrypt.compare(password, hashPassword).then((resp) => resp);
    }
}

export default Bcrypt;
