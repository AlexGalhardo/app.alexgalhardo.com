/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 *
 *  http://localhost:3000/api/public
 */

import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';

import Blog from '../../models/Blog';
import Books from '../../models/Books';
import Games from '../../models/Games';
import Movies from '../../models/Movies';
import TVShows from '../../models/TVShows';
import Users from '../../models/Users';

const prisma = new PrismaClient();

class APIPublicController {
	static async getPublicBlog(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const blog = await Blog.getAll();
			return res.json({
				blog,
			});
		} catch (err) {
			next(err);
		}
	}

	static async getPublicBlogPostByID(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const { blog_id } = req.params;
			const blog = await Blog.getByID(blog_id);
			return res.json({
				blog,
			});
		} catch (err) {
			next(err);
		}
	}

	static async getPublicBlogPostRandom(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const totalBlogPosts = await Blog.getTotal();
			const random_blogPost_id =
				(await Math.floor(Math.random() * totalBlogPosts)) + 1;
			const blog = await Blog.getBlogPostByID(random_blogPost_id);
			return res.json({
				blog,
			});
		} catch (err) {
			next(err);
		}
	}

	static async getPublicGames(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const allGames = await prisma.game.findMany({});

			return res.json(allGames);
		} catch (err) {
			next(err);
		}
	}

	static async getPublicGameByID(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const { game_id } = req.params;
			const gameById = await Games.getById(game_id);
			return res.json(gameById);
		} catch (err) {
			next(err);
		}
	}

	static async getPublicRandomGame(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const randomGame = await Games.getRandom();
			return res.json(randomGame);
		} catch (err) {
			next(err);
		}
	}

	static async getPublicBooks(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const books = await Books.getAll();
			return res.json(books);
		} catch (err) {
			next(err);
		}
	}

	static async getPublicBookByID(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const { book_id } = req.params;
			const book = await Books.getByID(book_id);
			return res.json({
				book,
			});
		} catch (err) {
			next(err);
		}
	}

	static async getPublicRandomBook(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const book = await Books.getRandom();
			return res.json({
				book,
			});
		} catch (err) {
			next(err);
		}
	}
}

export default APIPublicController;
