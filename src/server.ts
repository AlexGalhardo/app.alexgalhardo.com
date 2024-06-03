import "dotenv/config";
import bodyParser from "body-parser";
import compression from "compression";
import flash from "connect-flash";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import session from "express-session";
import adminRoutes from "./routes/admin.routes";
import profileRoutes from "./routes/profile.routes";
import publicRoutes from "./routes/public.routes";
import apiRoutes from "./routes/api.routes";
import "express-async-errors";

global.SESSION_USER = null;

const app = express();

app.use(cookieParser())
    .use(cors())
    .use(flash())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(express.json())
    .use(compression())
    .use(
        session({
            secret: `some secret`,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 3600 * 1000,
            },
        }),
    )
    .use(express.static("src/public"))
    .use("/profile", profileRoutes)
    .use("/admin", adminRoutes)
    .use("/api", apiRoutes)
    .use(publicRoutes)
    .use((_, res: Response) => {
        return res.redirect("/");
    })
    .use((error: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500);

        if (error.name === "EBADCSRFTOKEN") {
            req.flash("warning", "Inválid CSRF Token!");
            return res.redirect("/");
        }

        req.flash("warning", `Something went wrong ERROR => ${error}`);

        return next();
    })
    .listen(Number(process.env.PORT ?? 3000), "0.0.0.0", () => {
        console.log(`...Galhardo APP Server running on http://localhost:${process.env.PORT ?? 3000}!`);
    });

export default app;
