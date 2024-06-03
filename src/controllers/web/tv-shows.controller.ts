import { Request, Response } from "express";

import Header from "../../utils/Header";
import BooksRepository from "../../repositories/books.repository";
import GamesRepository from "../../repositories/games.repository";
import MoviesRepository from "../../repositories/movies.repository";
import TVShowsRepository from "../../repositories/tv-shows.repository";
import edge from "../../config/edge";

export default class TVShowsController {
    static async getViewTVShows(req: Request, res: Response) {
        try {
            const tvshow = await TVShowsRepository.getRandom();
            const totalGames = await GamesRepository.getTotal();
            const totalBooks = await BooksRepository.getTotal();
            const totalMovies = await MoviesRepository.getTotal();
            const totalTVShows = await TVShowsRepository.getTotal();

            return res.setHeader("Content-Type", "text/html").end(
                await edge.render("pages/tvshows", {
                    flash_success: req.flash("success").length ? req.flash("success")[0] : null,
                    flash_warning: req.flash("warning").length ? req.flash("warning")[0] : null,
                    tvshow: tvshow[0],
                    totalGames,
                    totalBooks,
                    totalMovies,
                    totalTVShows,
                    user: global.SESSION_USER,
                    app_url: process.env.APP_URL,
                    header: Header.books(),
                }),
            );
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async getSearchTVShowTitle(req: Request, res: Response) {
        const searchTVShowTitle = req.query.title;

        if (!searchTVShowTitle) {
            return res.redirect("/");
        }

        const searchTVShows = await TVShowsRepository.searchTitle(searchTVShowTitle as string);

        if (!searchTVShows.length) {
            req.flash("warning", `No tvshows found from search: ${searchTVShowTitle}! Recommending a Random TVShow`);
            return res.redirect("/");
        }

        if (searchTVShows.length > 1) {
            searchTVShows[0].firstTVShow = true;
            return res.render("pages/tvshows", {
                flash_success: `${
                    searchTVShows.length
                } TVShows Found From Search Title: ${searchTVShowTitle.toUpperCase()}`,
                tvshows: searchTVShows,
                user: global.SESSION_USER,
                header: Header.tvshows(),
            });
        }

        return res.render("pages/tvshows", {
            flash_success: `1 TVShow Found From Search Title: ${searchTVShowTitle.toUpperCase()}`,
            tvshow: searchTVShows[0],
            user: global.SESSION_USER,
            header: Header.tvshows(),
        });
    }
}
