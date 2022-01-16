import { Request, Response } from 'express';

import Header from '../helpers/Header';
import Books from '../models/Books';
import Games from '../models/Games';
import Movies from '../models/Movies';
import TVShows from '../models/TVShows';
import Users from '../models/Users';

export default class MoviesController {
    static async getViewMovies(req: Request, res: Response) {
        const movie = await Movies.getRandom();
        const totalGames = await Games.getTotal();
        const totalBooks = await Books.getTotal();
        const totalMovies = await Movies.getTotal();
        const totalTVShows = await TVShows.getTotal();
        const totalItensShopCart = await Users.getTotalItensShopCart();

        return res.render('pages/movies', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            movie,
            totalGames,
            totalBooks,
            totalMovies,
            totalTVShows,
            totalItensShopCart,
            user: global.SESSION_USER,
            app_url: process.env.APP_URL,
            header: Header.movies(),
        });
    }

    static async getSearchMovieTitle(req: Request, res: Response) {
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
                user: global.SESSION_USER,
                header: Header.movies(),
            });
        }

        return res.render('pages/movies', {
            flash_success: `1 Game Found From Search Title: ${searchMovieTitle.toUpperCase()}`,
            movie: searchedMovies[0],
            user: global.SESSION_USER,
            header: Header.movies(),
        });
    }
}
