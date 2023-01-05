/* eslint-disable import-helpers/order-imports */
import "dotenv/config";
import bodyParser from "body-parser";
import compression from "compression";
import flash from "connect-flash";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import session from "express-session";
// import helmet from "helmet";
import mustache from "mustache-express";
import path from "path";

// ROUTES
import adminRoutes from "./routes/adminRoutes";
import profileRoutes from "./routes/profileRoutes";
import publicRoutes from "./routes/publicRoutes";
import apiRoutes from "./routes/apiRoutes";

import "express-async-errors";

dotenv.config();

global.SESSION_USER = null;

// LocalHost HTTPS ~ PORT 3000
// const app = require('https-localhost')();

// LocalHost HTTP
const app = express();

// CSRF
app.use(cookieParser());

// Secure HTTP Headers Responses & Requests
// app.use(helmet());

// CORS
app.use(cors());

// FLASH MESSAGES
app.use(flash());

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));

// JSON
app.use(express.json());

// COMPRESS HTTP RESPONSES
app.use(compression());

// SESSION
app.use(
    session({
        name: "session",
        secret: `${process.env.SESSION_SECRET}`,
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 3600 * 1000, // 1hr
        },
    }),
);

// TEMPLATE ENGINE
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());

// PUBLIC STATIC FILES
app.use(express.static("src/public"));

// ROUTES
app.use("/profile", profileRoutes);
app.use("/admin", adminRoutes);
app.use("/api", apiRoutes);
app.use(publicRoutes);

// ERROR 404
app.use((req: Request, res: Response) => {
    return res.render("pages/404", {
        user: global.SESSION_USER,
    });
});

// HANDLING SERVER ERRORS
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500);

    if (error?.code === "EBADCSRFTOKEN") {
        req.flash("warning", "Inválid CSRF Token!");
        return res.redirect("/");
    }

    req.flash("warning", "Something went wrong");

    return next();
});

export default app;
