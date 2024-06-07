import { Request, Response } from "express";

import Header from "../../utils/Header";
import NumberHelper from "../../utils/Numbers";
import BooksRepository from "../../repositories/books.repository";
import GamesRepository from "../../repositories/games.repository";
import MoviesRepository from "../../repositories/movies.repository";
import TVShowsRepository from "../../repositories/tv-shows.repository";
import UsersRepository from "../../repositories/users.repository";
import edge from "../../config/edge";

export default class GamesController {
	static async getViewGames(req: Request, res: Response) {
		try {
			const game = await GamesRepository.getRandom();
			const totalGames = await GamesRepository.getTotal();
			const totalBooks = await BooksRepository.getTotal();
			const totalMovies = await MoviesRepository.getTotal();
			const totalTVShows = await TVShowsRepository.getTotal();
			game.price = NumberHelper.toFloat(game.price as unknown as string);

			return res.setHeader("Content-Type", "text/html").end(
				await edge.render("pages/games", {
					flash_success: req.flash("success").length ? req.flash("success")[0] : null,
					flash_warning: req.flash("warning").length ? req.flash("warning")[0] : null,
					game,
					totalGames,
					totalBooks,
					totalMovies,
					totalTVShows,
					user: global.SESSION_USER,
					app_url: process.env.APP_URL,
					header: Header.games(),
				}),
			);
		} catch (error: any) {
			res.status(500).send(error.message);
		}
	}

	static async getSearchGameTitle(req: Request, res: Response) {
		try {
			const searchGameTitle = req.query.title as string;

			if (!searchGameTitle) {
				return res.redirect("/");
			}

			let searchedGames = await GamesRepository.searchTitle(searchGameTitle);

			if (!searchedGames.length) {
				req.flash("warning", `No games found from search: ${searchGameTitle}! Recommending a Random Game`);
				return res.redirect("/");
			}

			if (searchedGames.length > 1) {
				return res.setHeader("Content-Type", "text/html").end(
					await edge.render("pages/games", {
						flash_success: `${searchedGames.length
							} Games Found From Search Title: ${String(searchGameTitle).toUpperCase()}`,
						games: searchedGames,
						user: global.SESSION_USER,
						header: Header.games(),
					}),
				);
			}

			return res.setHeader("Content-Type", "text/html").end(
				await edge.render("pages/games", {
					flash_success: `1 Game Found From Search Title: ${String(searchGameTitle).toUpperCase()}`,
					games: searchedGames,
					user: global.SESSION_USER,
					header: Header.games(),
				}),
			);
		} catch (error: any) {
			res.status(500).send(error.message);
		}
	}
}
