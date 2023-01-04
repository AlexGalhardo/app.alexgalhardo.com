import { Router } from "express";

import APIController from "../controllers/API/APIController";
import APIProfileController from "../controllers/API/APIProfileController";
import APIPublicController from "../controllers/API/APIPublicController";

const router = Router();

export default router
    .get("/", APIController.getWelcomeToAPI)
    .get("/public", APIController.getPublicEndpoints)
    .get("/admin", APIController.getAdminEndpoints)

    .get("/public/email/:email", APIPublicController.verifyIfEmailIsAlreadyRegistred)

    .get("/public/blog", APIPublicController.getPublicBlog)
    .get("/public/blog/random", APIPublicController.getPublicBlogRandom)
    .get("/public/blog/:blog_id", APIPublicController.getPublicBlogByID)

    .get("/public/games", APIPublicController.getPublicGames)
    .get("/public/games/random", APIPublicController.getPublicRandomGame)
    .get("/public/games/:game_id", APIPublicController.getPublicGameByID)

    .get("/public/books", APIPublicController.getPublicBooks)
    .get("/public/books/random", APIPublicController.getPublicRandomBook)
    .get("/public/books/:book_id", APIPublicController.getPublicBookByID)

    .get("/public/movies", APIPublicController.getPublicMovies)
    .get("/public/movies/random", APIPublicController.getPublicRandomMovie)
    .get("/public/movies/:movie_id", APIPublicController.getPublicMovieByID)

    .get("/public/tvshows", APIPublicController.getPublicTVShows)
    .get("/public/tvshows/random", APIPublicController.getPublicRandomTVShow)
    .get("/public/tvshows/:tvshow_id", APIPublicController.getPublicTVShowByID)

    .post("/profile/login", APIProfileController.postLogin)
    .patch("/profile/patch", APIProfileController.patchProfile)
    .delete("/profile/delete", APIProfileController.deleteProfile);
