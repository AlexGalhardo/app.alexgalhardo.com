import { Request, Response } from 'express';

import Header from '../helpers/Header';
import Number from '../helpers/Number';
import Books from '../models/Books';
import Games from '../models/Games';
import Movies from '../models/Movies';
import TVShows from '../models/TVShows';
import Users from '../models/Users';

export default class BooksController {
    static async getViewBooks(req: Request, res: Response) {
        const book = await Books.getRandom();
        const totalGames = await Games.getTotal();
        const totalBooks = await Books.getTotal();
        const totalMovies = await Movies.getTotal();
        const totalTVShows = await TVShows.getTotal();
        const totalItensShopCart = await Users.getTotalItensShopCart();
        book.price = Number.toFloat(book.price);

        return res.render('pages/books', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            book,
            totalGames,
            totalBooks,
            totalMovies,
            totalTVShows,
            totalItensShopCart,
            user: global.SESSION_USER,
            app_url: process.env.APP_URL,
            header: Header.books(),
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
                user: global.SESSION_USER,
                header: Header.books(),
            });
        }

        return res.render('pages/books', {
            flash_success: `1 Book Found From Search Title: ${searchBookTitle.toUpperCase()}`,
            book: searchedBooks[0],
            user: global.SESSION_USER,
            header: Header.books(),
        });
    }
}
