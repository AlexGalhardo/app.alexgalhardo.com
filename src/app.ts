/* eslint-disable import-helpers/order-imports */
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
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
import morganMiddleware from './config/morgan';

// ROUTES
import adminRoutes from './routes/adminRoutes';
import apiRoutes from './routes/apiRoutes';
import profileRoutes from './routes/profileRoutes';
import publicRoutes from './routes/publicRoutes';
import testRoutes from './routes/testRoutes';

import 'express-async-errors';

dotenv.config();

global.SESSION_USER = null;

// LocalHost HTTPS ~ PORT 3000
// const app = require('https-localhost')();

// LocalHost HTTP
const app = express();

// Morgan Log all http errors with status code >= 400
app.use(morganMiddleware);

Sentry.init({
    dsn: 'https://2d285431e813437480ba5850b71b732c@o1118030.ingest.sentry.io/6151817',
    integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 0.8,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// All controllers should live here
app.get('/test-sentry', function rootHandler(req, res) {
    res.status(404);
    res.end('Hello world!');
});

app.get('/debug-sentry', function mainHandler(req, res) {
    throw new Error('My first Sentry error!');
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

//  FORCE HTTP TO HTTPS
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

// Secure HTTP Headers Responses & Requests
app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);

// COMPRESS HTTP RESPONSES
app.use(compression());

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
