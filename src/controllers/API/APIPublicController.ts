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

import Blog from '../../models/Blog';
import Books from '../../models/Books';
import Games from '../../models/Games';
import Movies from '../../models/Movies';
import TVShows from '../../models/TVShows';
import Users from '../../models/Users';

const prisma = new PrismaClient();

class APIPublicController {
	static async getPublicBlog(req, res, next) {
		try {
			const blog = await Blog.getAll();
			return res.json({
				blog,
			});
		} catch (err) {
			next(err);
		}
	}

	static async getPublicBlogPostByID(req, res, next) {
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

	static async getPublicBlogPostRandom(req, res, next) {
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

	static async getPublicGames(req, res, next) {
		try {
			const allGames = await prisma.game.findMany({});

			return res.json(allGames);
		} catch (err) {
			next(err);
		}
	}

	static async getPublicGameByID(req, res, next) {
		try {
			const { game_id } = req.params;
			const gameById = await prisma.game.findUnique({
				where: {
					id: game_id,
				},
			});

			return res.json(gameById);
		} catch (err) {
			next(err);
		}
	}

	static async getPublicRandomGame(req, res, next) {
		try {
			const totalGames = await prisma.game.count();
			const skip = Math.floor(Math.random() * totalGames);
			const randomGame = await prisma.game.findMany({
				take: 1,
				skip,
			});

			return res.json(randomGame);
		} catch (err) {
			next(err);
		}
	}

	static async getPublicBooks(req, res, next) {
		try {
			const books = await Books.getAll();
			return res.json({
				books,
			});
		} catch (err) {
			next(err);
		}
	}

	static async getPublicBookByID(req, res, next) {
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

	static async getPublicRandomBook(req, res, next) {
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
