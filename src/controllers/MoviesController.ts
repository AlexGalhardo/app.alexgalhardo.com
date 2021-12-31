/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * http://localhost:3000/movies
 */

import { Request, Response } from 'express';

import Header from '../helpers/Header';
import Books from '../models/Books';
import Games from '../models/Games';
import Movies from '../models/Movies';
import TVShows from '../models/TVShows';

class MoviesController {
    async getViewMovies(req: Request, res: Response) {
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
            header: Header.movies(),
        });
    }

    async getSearchMovieTitle(req: Request, res: Response) {
        const searchMovieTitle = req.query.title;

        if (!searchMovieTitle) {
            return res.redirect('/');
        }

        const searchedMovies = await Movies.searchTitle(searchMovieTitle);

        if (!searchedMovies.length) {
            req.flash(
                'warning',
                `No movies found from search: ${searchMovieTitle}! Recommending a Random Movie`
            );
            return res.redirect('/');
        }

        if (searchedMovies.length > 1) {
            searchedMovies[0].firstMovie = true;
            return res.render('pages/movies', {
                flash_success: `${searchedMovies.length
                    } Games Found From Search Title: ${searchMovieTitle.toUpperCase()}`,
                movies: searchedMovies,
                user: SESSION_USER,
                header: Header.movies(),
            });
        }

        return res.render('pages/movies', {
            flash_success: `1 Game Found From Search Title: ${searchMovieTitle.toUpperCase()}`,
            movie: searchedMovies[0],
            user: SESSION_USER,
            header: Header.movies(),
        });
    }
}

export default new MoviesController();
