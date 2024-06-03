import { Request, Response } from "express";

import Header from "../../utils/Header";
import BooksRepository from "../../repositories/books.repository";
import GamesRepository from "../../repositories/games.repository";
import MoviesRepository from "../../repositories/movies.repository";
import TVShowsRepository from "../../repositories/tv-shows.repository";
import edge from "../../config/edge";

export default class MoviesController {
	static async getViewMovies(req: Request, res: Response) {
		try {
			const movie = await Movies.getRandom();
			const totalGames = await GamesRepository.getTotal();
			const totalBooks = await BooksRepository.getTotal();
			const totalMovies = await Movies.getTotal();
			const totalTVShows = await TVShowsRepository.getTotal();

			return res.setHeader("Content-Type", "text/html").end(
				await edge.render("pages/movies", {
					flash_success: req.flash("success").length ?? null,
					flash_warning: req.flash("warning").length ?? null,
					movie,
					totalGames,
					totalBooks,
					totalMovies,
					totalTVShows,
					user: global.SESSION_USER,
					app_url: process.env.APP_URL,
					header: Header.movies(),
				}),
			);
		} catch (error: any) {
			res.status(500).send(error.message);
		}
	}

	static async getSearchMovieTitle(req: Request, res: Response) {
		const searchMovieTitle = req.query.title;

		if (!searchMovieTitle) {
			return res.redirect("/");
		}

		const searchedMovies = await Movies.searchTitle(searchMovieTitle);

		if (!searchedMovies.length) {
			req.flash("warning", `No movies found from search: ${searchMovieTitle}! Recommending a Random Movie`);
			return res.redirect("/");
		}

		if (searchedMovies.length > 1) {
			searchedMovies[0].firstMovie = true;
			return res.render("pages/movies", {
				flash_success: `${searchedMovies.length
					} Movies Found From Search Title: ${searchMovieTitle.toUpperCase()}`,
				movies: searchedMovies,
				user: global.SESSION_USER,
				header: Header.movies(),
			});
		}

		return res.render("pages/movies", {
			flash_success: `1 Game Found From Search Title: ${searchMovieTitle.toUpperCase()}`,
			movie: searchedMovies[0],
			user: global.SESSION_USER,
			header: Header.movies(),
		});
	}
}
