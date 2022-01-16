import fs from 'fs-extra';
import morgan from 'morgan';
import path from 'path';

const morganMiddleware = morgan(':method :url :status :response-time ms', {
    skip(req, res) {
        return res.statusCode < 400;
    },
    stream: fs.createWriteStream(path.join(__dirname, '../logs/morgan.log'), {
        flags: 'a',
    }),
});

export default morganMiddleware;
