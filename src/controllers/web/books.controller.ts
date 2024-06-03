import { Request, Response } from "express";

import Header from "../../utils/Header";
import Number from "../../utils/Numbers";
import BooksRepository from "../../repositories/books.repository";
import GamesRepository from "../../repositories/games.repository";
import MoviesRepository from "../../repositories/movies.repository";
import TVShowsRepository from "../../repositories/tv-shows.repository";
import edge from "../../config/edge";

export default class BooksController {
    static async getViewBooks(req: Request, res: Response) {
        try {
            const book = await BooksRepository.getRandom();
            const totalGames = await GamesRepository.getTotal();
            const totalBooks = await BooksRepository.getTotal();
            const totalMovies = await MoviesRepository.getTotal();
            const totalTVShows = await TVShowsRepository.getTotal();
            book.price = Number.toFloat(book.price as unknown as string);

            return res.setHeader("Content-Type", "text/html").end(
                await edge.render("pages/books", {
                    flash_success: req.flash("success").length ? req.flash("success")[0] : null,
                    flash_warning: req.flash("warning").length ? req.flash("warning")[0] : null,
                    book,
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

    static async getSearchBookTitle(req: Request, res: Response) {
        const searchBookTitle = req.query.title;

        if (!searchBookTitle) {
            return res.redirect("/books");
        }

        const searchedBooks = await BooksRepository.searchTitle(String(searchBookTitle));

        if (!searchedBooks.length) {
            req.flash("warning", `No books found from search: ${searchBookTitle}! Recommending a Random Book`);
            return res.redirect("/books");
        }

        if (searchedBooks.length > 1) {
            searchedBooks[0].firstBook = true;
            return res.render("pages/books", {
                flash_success: `${searchedBooks.length} Books Found For Search Title: ${searchBookTitle.toUpperCase()}`,
                books: searchedBooks,
                user: global.SESSION_USER,
                header: Header.books(),
            });
        }

        return res.render("pages/books", {
            flash_success: `1 Book Found From Search Title: ${searchBookTitle.toUpperCase()}`,
            book: searchedBooks[0],
            user: global.SESSION_USER,
            header: Header.books(),
        });
    }
}
