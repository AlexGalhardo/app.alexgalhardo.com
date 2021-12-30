/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * http://localhost:3000/
 */

import Header from '@helpers/Header';
import Number from '@helpers/Number';
import Books from '@models/Books';
import Games from '@models/Games';
import Movies from '@models/Movies';
import TVShows from '@models/TVShows';
import Users from '@models/Users';
import { Request, Response } from 'express';

class GamesController {
    async getViewGames(req: Request, res: Response) {
        const game = await Games.getRandom();
        const totalGames = await Games.getTotal();
        const totalBooks = await Books.getTotal();
        const totalMovies = await Movies.getTotal();
        const totalTVShows = await TVShows.getTotal();
        const totalItensShopCart = await Users.getTotalItensShopCart();
        game[0].price = Number.toFloat(game[0].price);

        return res.render('pages/games', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            game,
            totalGames,
            totalBooks,
            totalMovies,
            totalTVShows,
            totalItensShopCart,
            user: SESSION_USER,
            app_url: process.env.APP_URL,
            header: Header.games(),
        });
    }

    async getSearchGameTitle(req: Request, res: Response) {
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
            return res.render('pages/games', {
                flash_success: `${searchedGames.length
                    } Games Found From Search Title: ${searchGameTitle.toUpperCase()}`,
                games: searchedGames,
                user: SESSION_USER,
                header: Header.games(),
            });
        }

        return res.render('pages/games', {
            flash_success: `1 Game Found From Search Title: ${searchGameTitle.toUpperCase()}`,
            game: searchedGames[0],
            user: SESSION_USER,
            header: Header.games(),
        });
    }
}

export default new GamesController();
