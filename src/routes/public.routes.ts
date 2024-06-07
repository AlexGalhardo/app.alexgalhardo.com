import csrf from "csurf";
import { Router, Request, Response, NextFunction } from "express";
import { RecaptchaV3 } from "express-recaptcha";

import AppController from "../controllers/web/app.controller";
import AuthController from "../controllers/web/auth.controller";
import BlogController from "../controllers/web/blog.controller";
import BooksController from "../controllers/web/books.controller";
import ContactController from "../controllers/web/contact.controller";
import GamesController from "../controllers/web/games.controller";
import MoviesController from "../controllers/web/movies.controller";
import TVShowsController from "../controllers/web/tv-shows.controller";

const recaptcha = new RecaptchaV3(process.env.RECAPTCHA_ID as string, process.env.RECAPTCHA_SECRET as string, {
	callback: "cb",
});

const csrfProtection = csrf({ cookie: true });
const router = Router();

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	if (global.SESSION_USER) {
		req.flash("warning", "You need to logout first");
		return res.redirect("/");
	}
	return next();
};

const isNotAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	if (!global.SESSION_USER) {
		req.flash("warning", "You need to login first");
		return res.redirect("/login");
	}
	return next();
};

export { isNotAuthenticated };

router
	.get("/", GamesController.getViewGames)
	.get("/books", BooksController.getViewBooks)
	.get("/movies", MoviesController.getViewMovies)
	.get("/tvshows", TVShowsController.getViewTVShows)

	.get("/contact", recaptcha.middleware.render, csrfProtection, ContactController.getViewContact)
	.post("/contact", recaptcha.middleware.verify, csrfProtection, ContactController.postContact)

	.get("/privacy", AppController.getViewPrivacy)

	.get("/searchGame", GamesController.getSearchGameTitle)
	.get("/searchBook", BooksController.getSearchBookTitle)
	.get("/searchMovie", MoviesController.getSearchMovieTitle)
	.get("/searchTVShow", TVShowsController.getSearchTVShowTitle)

	.get("/blog", BlogController.getViewBlog)
	.get("/blog/search", BlogController.getSearchBlogTitle)
	.get("/blog/page/:page", BlogController.getViewBlog)

	.get("/blog/:slug", BlogController.getViewBlogPost)

	.get("/login", isAuthenticated, /* recaptcha.middleware.render, */ csrfProtection, AuthController.getViewLogin)
	.post("/login", isAuthenticated, /* recaptcha.middleware.verify, */ csrfProtection, AuthController.postLogin)

	.get("/signup", isAuthenticated, recaptcha.middleware.render, csrfProtection, AuthController.getViewSignup)
	.post("/signup", isAuthenticated, recaptcha.middleware.verify, csrfProtection, AuthController.postSignup)

	.get("/forget-password", isAuthenticated, AuthController.getViewForgetPassword)
	.post("/forget-password", isAuthenticated, AuthController.postForgetPassword)

	.get("/confirm-email/:email/:token", AuthController.getVerifyIfConfirmEmailURLIsValid)

	.get("/confirm-email", AuthController.getViewResendConfirmEmailLink)
	.post("/confirm-email", AuthController.postSendConfirmEmailLink)

	.get("/change-password/:email/:token", isAuthenticated, AuthController.getViewChangePassword)

	.get("/change-password/:any", isAuthenticated, AuthController.sendToForgetPassword)

	.get("/change-password", isAuthenticated, AuthController.sendToForgetPassword)

	.post("/change-password", isAuthenticated, AuthController.postResetPassword);

export default router;
