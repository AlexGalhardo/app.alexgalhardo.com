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

    async getSearchTVShowTitle(req: Request, res: Response) {
        const searchTVShowTitle = req.query.title;

        if (!searchTVShowTitle) {
            return res.redirect('/');
        }

        const searchTVShows = await TVShows.searchTitle(searchTVShowTitle);

        if (!searchTVShows.length) {
            req.flash(
                'warning',
                `No tvshows found from search: ${searchTVShowTitle}! Recommending a Random TVShow`
            );
            return res.redirect('/');
        }

        if (searchTVShows.length > 1) {
            searchTVShows[0].firstTVShow = true;
            return res.render('pages/tvshows', {
                flash_success: `${searchTVShows.length
                    } TVShows Found From Search Title: ${searchTVShowTitle.toUpperCase()}`,
                tvshows: searchTVShows,
                user: SESSION_USER,
                header: Header.tvshows(),
            });
        }

        return res.render('pages/tvshows', {
            flash_success: `1 TVShow Found From Search Title: ${searchTVShowTitle.toUpperCase()}`,
            tvshow: searchTVShows[0],
            user: SESSION_USER,
            header: Header.tvshows(),
        });
    }
}

export default new TVShowsController();
