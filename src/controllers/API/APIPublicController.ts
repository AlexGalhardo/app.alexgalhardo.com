/* eslint-disable consistent-return */
/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 *
 *  http://localhost:3000/api/public
 */

import Blog from '@models/Blog';
import Books from '@models/Books';
import Games from '@models/Games';
import Movies from '@models/Movies';
import Newsletter from '@models/Newsletter';
import TVShows from '@models/TVShows';
import Users from '@models/Users';
import { Request, Response, NextFunction } from 'express';

class APIPublicController {
    async getNewsletter(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.params;
            if (await Newsletter.addEmail(email)) {
                return res.json({
                    added_email_to_newsletter: true,
                });
            }
            return res.json({
                added_email_to_newsletter: false,
            });
        } catch (err) {
            next(err);
        }
    }

    async addGameToCart(req: Request, res: Response, next: NextFunction) {
        try {
            const { game_id } = req.params;
            if (!SESSION_USER) {
                return res.json({
                    error: 'User not logged in',
                });
            }

            if (await Users.addGameToShopCart(game_id)) {
                return res.json({
                    added_game_to_shop_cart: true,
                });
            }
            return res.json({
                added_game_to_shop_cart: false,
            });
        } catch (err) {
            next(err);
        }
    }
    /** ********* BLOG *********** */
    async getPublicBlog(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await Blog.getAll());
        } catch (err) {
            next(err);
        }
    }

    async getPublicBlogByID(req: Request, res: Response, next: NextFunction) {
        try {
            const { blog_id } = req.params;
            return res.json(await Blog.getById(blog_id));
        } catch (err) {
            next(err);
        }
    }

    async getPublicBlogRandom(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await Blog.getRandom());
        } catch (err) {
            next(err);
        }
    }

    /** ********* GAMES *********** */
    async getPublicGames(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await Games.getAll());
        } catch (err) {
            next(err);
        }
    }

    async getPublicGameByID(req: Request, res: Response, next: NextFunction) {
        try {
            const { game_id } = req.params;
            return res.json(await Games.getById(game_id));
        } catch (err) {
            next(err);
        }
    }

    async getPublicRandomGame(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await Games.getRandom());
        } catch (err) {
            next(err);
        }
    }

    /** ********* BOOKS *********** */
    async getPublicBooks(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await Books.getAll());
        } catch (err) {
            next(err);
        }
    }

    async getPublicBookByID(req: Request, res: Response, next: NextFunction) {
        try {
            const { book_id } = req.params;
            return res.json(await Books.getById(book_id));
        } catch (err) {
            next(err);
        }
    }

    async getPublicRandomBook(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await Books.getRandom());
        } catch (err) {
            next(err);
        }
    }

    /** ********* MOVIES *********** */
    async getPublicMovies(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await Movies.getAll());
        } catch (err) {
            next(err);
        }
    }

    async getPublicMovieByID(req: Request, res: Response, next: NextFunction) {
        try {
            const { movie_id } = req.params;
            return res.json(await Movies.getById(movie_id));
        } catch (err) {
            next(err);
        }
    }

    async getPublicRandomMovie(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            return res.json(await Movies.getRandom());
        } catch (err) {
            next(err);
        }
    }

    /** ********* TVSHOWS *********** */
    async getPublicTVShows(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await TVShows.getAll());
        } catch (err) {
            next(err);
        }
    }

    async getPublicTVShowByID(req: Request, res: Response, next: NextFunction) {
        try {
            const { tvshow_id } = req.params;
            return res.json(await TVShows.getById(tvshow_id));
        } catch (err) {
            next(err);
        }
    }

    async getPublicRandomTVShow(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            return res.json(await TVShows.getRandom());
        } catch (err) {
            next(err);
        }
    }
}

export default new APIPublicController();
