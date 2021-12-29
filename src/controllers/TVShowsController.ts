/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * http://localhost:3000/tvshows
 */

import { Request, Response } from 'express';

import Header from '../helpers/Header';
import Books from '../models/Books';
import Games from '../models/Games';
import Movies from '../models/Movies';
import TVShows from '../models/TVShows';

class TVShowsController {
    async getViewTVShows(req: Request, res: Response) {
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
}

export default new TVShowsController();
