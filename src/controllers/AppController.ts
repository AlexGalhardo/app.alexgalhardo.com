/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * http://localhost:3000/
 */

import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import Header from '../helpers/Header';
import NodeMailer from '../helpers/NodeMailer';
import TelegramBOTLogger from '../helpers/TelegramBOTLogger';
import Books from '../models/Books';
import Games from '../models/Games';
import Movies from '../models/Movies';
import TVShows from '../models/TVShows';

class AppController {
    static async getViewHome(req: Request, res: Response) {
        const game = await Games.getRandom();
        const totalGames = await Games.getTotal();
        const totalBooks = await Books.getTotal();
        const totalMovies = await Movies.getTotal();
        const totalTVShows = await TVShows.getTotal();
        game[0].price = parseFloat(game[0].price / 100).toFixed(2);

        return res.render('pages/home', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            game,
            totalGames,
            totalBooks,
            totalMovies,
            totalTVShows,
            user: SESSION_USER,
            app_url: process.env.APP_URL,
            header: Header.games(),
        });
    }

    static async getViewBooks(req: Request, res: Response) {
        const book = await Books.getRandom();
        const totalGames = await Games.getTotal();
        const totalBooks = await Books.getTotal();
        const totalMovies = await Movies.getTotal();
        const totalTVShows = await TVShows.getTotal();
        book[0].price = parseFloat(book[0].price / 100).toFixed(2);

        return res.render('pages/books', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            book,
            totalGames,
            totalBooks,
            totalMovies,
            totalTVShows,
            user: SESSION_USER,
            app_url: process.env.APP_URL,
            header: Header.books(),
        });
    }

    static async getViewMovies(req: Request, res: Response) {
        const movie = await Movies.getRandom();
        const totalGames = await Games.getTotal();
        const totalBooks = await Books.getTotal();
        const totalMovies = await Movies.getTotal();
        const totalTVShows = await TVShows.getTotal();

        return res.render('pages/movies', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            movie,
            totalGames,
            totalBooks,
            totalMovies,
            totalTVShows,
            user: SESSION_USER,
            app_url: process.env.APP_URL,
            header: Header.books(),
        });
    }

    static async getViewTVShows(req: Request, res: Response) {
        const tvshow = await TVShows.getRandom();
        const totalGames = await Games.getTotal();
        const totalBooks = await Books.getTotal();
        const totalMovies = await Movies.getTotal();
        const totalTVShows = await TVShows.getTotal();

        return res.render('pages/tvshows', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            tvshow,
            totalGames,
            totalBooks,
            totalMovies,
            totalTVShows,
            user: SESSION_USER,
            app_url: process.env.APP_URL,
            header: Header.books(),
        });
    }

    static getViewProjects(req: Request, res: Response) {
        res.render('pages/projects', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            user: SESSION_USER,
            header: Header.projects(),
        });
    }

    static getViewBank(req: Request, res: Response) {
        res.render('pages/bank', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            user: SESSION_USER,
            header: Header.bank(),
        });
    }

    static getViewToDo(req: Request, res: Response) {
        res.render('pages/toDo', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            user: SESSION_USER,
            header: Header.toDo(),
        });
    }

    static getViewCriptoBOT(req, res) {
        return res.render('pages/criptoBOT', {
            user: SESSION_USER,
            header: Header.criptoBOT(),
        });
    }

    static getViewContact(req: Request, res: Response) {
        res.render('pages/contact', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            user: SESSION_USER,
            header: Header.contact(),
            captcha: res.recaptcha,
            csrfToken: req.csrfToken(),
        });
    }

    static async postContact(req: Request, res: Response) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                req.flash('warning', `${errors.array()[0].msg}`);
                return res.redirect('/contact');
            }

            const { name, email, subject, message } = req.body;

            const contactObject = {
                name,
                email,
                subject,
                message,
            };

            await NodeMailer.sendContact(contactObject);
            await TelegramBOTLogger.logContact(contactObject);

            req.flash('success', 'Message Send!');
            return res.redirect('/contact');
        } catch (error) {
            throw new Error(error);
        }
    }

    static getViewAbout(req: Request, res: Response) {
        return res.render('pages/about', {
            user: SESSION_USER,
            header: Header.about(),
        });
    }

    static getViewPrivacy(req: Request, res: Response) {
        return res.render('pages/privacy', {
            user: SESSION_USER,
            header: Header.privacy(),
        });
    }

    static async getSearchGameTitle(req: Request, res: Response) {
        const searchGameTitle = req.query.title;

        if (!searchGameTitle) {
            return res.redirect('/');
        }

        const searchedGames = await Games.searchTitle(searchGameTitle);

        if (!searchedGames.length) {
            req.flash(
                'warning',
                `No games found from search: ${searchGameTitle}! Recommending a Random Game`
            );
            return res.redirect('/');
        }

        if (searchedGames.length > 1) {
            searchedGames[0].firstGame = true;
            return res.render('pages/home', {
                flash_success: `${searchedGames.length
                    } Games Found From Search Title: ${searchGameTitle.toUpperCase()}`,
                games: searchedGames,
                user: SESSION_USER,
                header: Header.games(),
            });
        }

        return res.render('pages/home', {
            flash_success: `1 Game Found From Search Title: ${searchGameTitle.toUpperCase()}`,
            game: searchedGames[0],
            user: SESSION_USER,
            header: Header.games(),
        });
    }

    static async getSearchBookTitle(req: Request, res: Response) {
        const searchBookTitle = req.query.title;

        if (!searchBookTitle) {
            return res.redirect('/books');
        }

        const searchedBooks = await Books.searchTitle(searchBookTitle);

        if (!searchedBooks.length) {
            req.flash(
                'warning',
                `No books found from search: ${searchBookTitle}! Recommending a Random Book`
            );
            return res.redirect('/books');
        }

        if (searchedBooks.length > 1) {
            searchedBooks[0].firstBook = true;
            return res.render('pages/books', {
                flash_success: `${searchedBooks.length
                    } Books Found For Search Title: ${searchBookTitle.toUpperCase()}`,
                books: searchedBooks,
                user: SESSION_USER,
                header: Header.books(),
            });
        }

        return res.render('pages/books', {
            flash_success: `1 Book Found From Search Title: ${searchBookTitle.toUpperCase()}`,
            book: searchedBooks[0],
            user: SESSION_USER,
            header: Header.books(),
        });
    }
}

export default AppController;
