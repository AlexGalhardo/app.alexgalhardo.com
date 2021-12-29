/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * ./app.js
 */

import bodyParser from 'body-parser';
import compression from 'compression';
import flash from 'connect-flash';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import session from 'express-session';
import helmet from 'helmet';
import { MulterError } from 'multer';
import mustache from 'mustache-express';
import path from 'path';

// import morgan from './config/morgan';
// eslint-disable-next-line import-helpers/order-imports
// import PinoLog from './config/pino';

// ROUTES
import adminRoutes from './routes/adminRoutes';
import apiRoutes from './routes/apiRoutes';
import profileRoutes from './routes/profileRoutes';
import publicRoutes from './routes/publicRoutes';
import testRoutes from './routes/testRoutes';

import 'express-async-errors';

dotenv.config();

global.APP_ROOT_PATH = path.resolve(__dirname);
global.SESSION_USER = null;

// eslint-disable-next-line no-unused-expressions
/* process.env.APP_DATABASE === 'JSON'
    ? console.log('USING DATABASE: JSON')
    : console.log('USING PRISMA ORM with POSTGRESQL');
    */

// LocalHost HTTP
const app = express();

/* FORCE HTTP TO HTTPS */
// this code will not work with https-localhost module
// use this code in production without port defined in url (localhost:3000)
// and using a reverse-proxy like nginx
// need to defined this middleware before any routes
if (process.env.NODE_ENV === 'production') {
    app.use((req: Request, res: Response, next) => {
        if ((req.headers['x-forwarded-proto'] || '').endsWith('http')) {
            res.redirect(`https://${req.hostname}${req.url}`);
        } else {
            next();
        }
    });
}

// CSRF
app.use(cookieParser());

// LOGS
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const pinoHttp = require('pino-http')({ logger: PinoLog });

// app.use(morgan);

// Secure HTTP Headers Responses & Requests
app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);

// COMPRESS HTTP RESPONSES
app.use(compression());

// STATUS MONITOR
// http://localhost:3000/status
// eslint-disable-next-line @typescript-eslint/no-var-requires
// app.use(require('express-status-monitor')());

// CORS
app.use(cors());

// SESSION
app.use(
    session({
        name: 'session',
        secret: `${process.env.SESSION_SECRET}`,
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 3600 * 1000, // 1hr
        },
    })
);

// FLASH MESSAGES
app.use(flash());

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));

// JSON
app.use(express.json());

// TEMPLATE ENGINE
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

// PUBLIC STATIC FILES
app.use(express.static('src/public'));

// ROUTES
app.use('/api', apiRoutes);
app.use('/profile', profileRoutes);
app.use('/admin', adminRoutes);
app.use('/test', testRoutes);
app.use(publicRoutes);

// ERROR 404
app.use((req: Request, res: Response) => {
    return res.render('pages/404', {
        user: req.user,
    });
});

// HANDLING SERVER ERRORS
app.use((err: Error, req: Request, res: Response) => {
    res.status(500);

    if (err.code === 'EBADCSRFTOKEN')
        return res.json({ error: 'Invalid CSRF Token!' });

    if (err instanceof MulterError) return res.json({ error: err.code });

    console.log(err);

    return res.json({
        name: err.name,
        message: err.message,
    });
});

export default app;
