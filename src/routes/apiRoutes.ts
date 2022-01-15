import { Request, Response, NextFunction, Router } from 'express';
import jwt from 'jsonwebtoken';

import AdminController from '../controllers/ADMIN/AdminController';
import APIController from '../controllers/API/APIController';
import APIProfileController from '../controllers/API/APIProfileController';
import APIPublicController from '../controllers/API/APIPublicController';
import Users from '../models/Users';

const router = Router();

const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer') ||
        !req.headers.authorization.split(' ')[1]
    ) {
        return res.status(422).json({
            message:
                'Please provide the ADMIN JWT Token in Header Authorization Bearer Token',
        });
    }

    const JWT_TOKEN = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(JWT_TOKEN, process.env.JWT_SECRET as string);

    if (!Users.verifyIfAdminById(decoded.user_id)) {
        return res.status(422).json({
            message: 'This ADMIN JWT Token is Inválid!',
        });
    }
    return next();
};

export default router
    .get('/', APIController.getWelcomeToAPI)
    .get('/public', APIController.getPublicEndpoints)
    .get('/admin', APIController.getAdminEndpoints)

    .get(
        '/public/email/:email',
        APIPublicController.verifyIfEmailIsAlreadyRegistred
    )

    .get('/public/blog', APIPublicController.getPublicBlog)
    .get('/public/blog/random', APIPublicController.getPublicBlogRandom)
    .get('/public/blog/:blog_id', APIPublicController.getPublicBlogByID)

    .get('/public/games', APIPublicController.getPublicGames)
    .get('/public/games/random', APIPublicController.getPublicRandomGame)
    .get('/public/games/:game_id', APIPublicController.getPublicGameByID)

    .get('/public/books', APIPublicController.getPublicBooks)
    .get('/public/books/random', APIPublicController.getPublicRandomBook)
    .get('/public/books/:book_id', APIPublicController.getPublicBookByID)

    .get('/public/movies', APIPublicController.getPublicMovies)
    .get('/public/movies/random', APIPublicController.getPublicRandomMovie)
    .get('/public/movies/:movie_id', APIPublicController.getPublicMovieByID)

    .get('/public/tvshows', APIPublicController.getPublicTVShows)
    .get('/public/tvshows/random', APIPublicController.getPublicRandomTVShow)
    .get('/public/tvshows/:tvshow_id', APIPublicController.getPublicTVShowByID)

    .post('/profile/login', APIProfileController.postLogin)
    .patch('/profile/patch', APIProfileController.patchProfile)
    .delete('/profile/delete', APIProfileController.deleteProfile)

    .get('/addCart/game/:game_id', APIPublicController.addGameToCart)

    .get('/addCart/book/:book_id', APIPublicController.addBookToCart)

/* .post('/admin/login', AdminController.postAdminLogin)
.post('/admin/test', AdminController.postAdminTestJWT)
.get(
    '/admin/users',
    authenticateAdmin,
    AdminController.getUsersRegistred
)

.post(
    '/admin/blog/create',
    authenticateAdmin,
    AdminController.postCreateBlogPost
)
.patch(
    '/admin/blog/patch/:blog_id',
    authenticateAdmin,
    AdminController.patchBlogPost
)
.delete(
    '/admin/blog/delete/:blog_id',
    authenticateAdmin,
    AdminController.deleteBlogPost
)

.get('/admin/books/listAll', AdminController.getAllBooks)
.post(
    '/admin/books/create',
    authenticateAdmin,
    AdminController.postCreateBook
)
.patch(
    '/admin/books/patch/:book_id',
    authenticateAdmin,
    AdminController.patchBook
)
.delete(
    '/admin/books/delete/:book_id',
    authenticateAdmin,
    AdminController.deleteBook
); */
