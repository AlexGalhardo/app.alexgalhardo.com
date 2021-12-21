/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * API ROUTES
 * http://localhost:3000/api
 */

// MODULES

// INIT EXPRESS
import express from 'express';
import jwt from 'jsonwebtoken';

// MODELS

// API CONTROLLERS
import APIAdminBlogController from '../controllers/API/APIAdminBlogController';
import APIAdminBookController from '../controllers/API/APIAdminBookController';
import APIAdminController from '../controllers/API/APIAdminController';
import APIAdminGameController from '../controllers/API/APIAdminGameController';
import APIController from '../controllers/API/APIController';
import APIProfileController from '../controllers/API/APIProfileController';
import APIPublicController from '../controllers/API/APIPublicController';
import Users from '../models/JSON/Users';

const router = express.Router();

// ---------------------- MIDDLEWARES
const verifyAPIAdminJWTToken = (req, res, next) => {
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
    const decoded = jwt.verify(JWT_TOKEN, process.env.JWT_SECRET);

    if (!Users.verifyIfAdminByID(decoded.admin_id)) {
        return res.status(422).json({
            message: 'This JWT Token is Inválid!',
        });
    }
    return next();
};

// API ROUTES

//  ---------------- INTRODUCTION
router
    .get('/', APIController.getWelcomeToAPI)
    .get('/public', APIController.getPublicEndpoints)
    .get('/admin', APIController.getAdminEndpoints)

    //  ---------------- PUBLIC
    .get('/public/blog', APIPublicController.getPublicBlog)
    .get('/public/blog/random', APIPublicController.getPublicBlogPostRandom)
    .get('/public/blog/:blog_id', APIPublicController.getPublicBlogPostByID)

    .get('/public/games', APIPublicController.getPublicGames)
    .get('/public/games/random', APIPublicController.getPublicRandomGame)
    .get('/public/games/:game_id', APIPublicController.getPublicGameByID)

    .get('/public/books', APIPublicController.getPublicBooks)
    .get('/public/books/random', APIPublicController.getPublicRandomBook)
    .get('/public/books/:book_id', APIPublicController.getPublicBookByID)

    //  ---------------- PROFILE
    .post('/profile/login', APIProfileController.postProfileLogin)
    .patch('/profile/patch', APIProfileController.updateProfile)
    .delete('/profile/delete', APIProfileController.deleteProfile)

    //  ---------------- ADMIN
    .post('/admin/login', APIAdminController.postAdminLogin)
    .post('/admin/test', APIAdminController.postAdminTestJWT)

    // ----------------- ADMIN BLOG
    .post(
        '/admin/blog/create',
        verifyAPIAdminJWTToken,
        APIAdminBlogController.postCreateBlogPost
    )
    .patch(
        '/admin/blog/patch/:blog_id',
        verifyAPIAdminJWTToken,
        APIAdminBlogController.patchBlogPost
    )
    .delete(
        '/admin/blog/delete/:blog_id',
        verifyAPIAdminJWTToken,
        APIAdminBlogController.deleteBlogPost
    )

    //  ---------------- ADMIN GAMES
    .post(
        '/admin/games/create',
        verifyAPIAdminJWTToken,
        APIAdminGameController.postCreateGame
    )
    .patch(
        '/admin/games/patch/:game_id',
        verifyAPIAdminJWTToken,
        APIAdminGameController.patchGame
    )
    .delete(
        '/admin/games/delete/:game_id',
        verifyAPIAdminJWTToken,
        APIAdminGameController.deleteGame
    )

    //  ---------------- ADMIN BOOKS
    .get('/admin/books/listAll', APIAdminBookController.getAllBooks)
    .post(
        '/admin/books/create',
        verifyAPIAdminJWTToken,
        APIAdminBookController.postCreateBook
    )
    .patch(
        '/admin/books/patch/:book_id',
        verifyAPIAdminJWTToken,
        APIAdminBookController.patchBook
    )
    .delete(
        '/admin/books/delete/:book_id',
        verifyAPIAdminJWTToken,
        APIAdminBookController.deleteBook
    );

export default router;
