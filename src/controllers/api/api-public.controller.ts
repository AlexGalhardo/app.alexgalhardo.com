/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from "express";

import BlogRepository from "../../repositories/blog.repository";
import BooksRepository from "../../repositories/books.repository";
import GamesRepository from "../../repositories/games.repository";
import MoviesRepository from "../../repositories/movies.repository";
import TVShowsRepository from "../../repositories/tv-shows.repository";
import UsersRepository from "../../repositories/users.repository";

export default class APIPublicController {
    static async verifyIfEmailIsAlreadyRegistred(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.params;
            if (await UsersRepository.emailRegistred(email)) {
                return res.json({
                    emailRegistred: true,
                });
            }
            return res.json({
                emailRegistred: false,
            });
        } catch (err) {
            next(err);
        }
    }

    /** ********* BLOG *********** */
    static async getPublicBlog(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await BlogRepository.getAll());
        } catch (err) {
            next(err);
        }
    }

    static async getPublicBlogByID(req: Request, res: Response, next: NextFunction) {
        try {
            const { blog_id } = req.params;
            return res.json(await BlogRepository.getById(blog_id));
        } catch (err) {
            next(err);
        }
    }

    static async getPublicBlogRandom(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await BlogRepository.getRandom());
        } catch (err) {
            next(err);
        }
    }

    /** ********* GAMES *********** */
    static async getPublicGames(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await GamesRepository.getAll());
        } catch (err) {
            next(err);
        }
    }

    static async getPublicGameByID(req: Request, res: Response, next: NextFunction) {
        try {
            const { game_id } = req.params;
            return res.json(await GamesRepository.getById(game_id));
        } catch (err) {
            next(err);
        }
    }

    static async getPublicRandomGame(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await GamesRepository.getRandom());
        } catch (err) {
            next(err);
        }
    }

    /** ********* BOOKS *********** */
    static async getPublicBooks(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await BooksRepository.getAll());
        } catch (err) {
            next(err);
        }
    }

    static async getPublicBookByID(req: Request, res: Response, next: NextFunction) {
        try {
            const { book_id } = req.params;
            return res.json(await BooksRepository.getById(book_id));
        } catch (err) {
            next(err);
        }
    }

    static async getPublicRandomBook(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await BooksRepository.getRandom());
        } catch (err) {
            next(err);
        }
    }

    /** ********* MOVIES *********** */
    static async getPublicMovies(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await MoviesRepository.getAll());
        } catch (err) {
            next(err);
        }
    }

    static async getPublicMovieByID(req: Request, res: Response, next: NextFunction) {
        try {
            const { movie_id } = req.params;
            return res.json(await MoviesRepository.getById(movie_id));
        } catch (err) {
            next(err);
        }
    }

    static async getPublicRandomMovie(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await MoviesRepository.getRandom());
        } catch (err) {
            next(err);
        }
    }

    static async getPublicTVShows(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await TVShowsRepository.getAll());
        } catch (err) {
            next(err);
        }
    }

    static async getPublicTVShowByID(req: Request, res: Response, next: NextFunction) {
        try {
            const { tvshow_id } = req.params;
            return res.json(await TVShowsRepository.getById(tvshow_id));
        } catch (err) {
            next(err);
        }
    }

    static async getPublicRandomTVShow(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await TVShowsRepository.getRandom());
        } catch (err) {
            next(err);
        }
    }
}
