/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 *
 *  http://localhost:3000/api
 * 	http://localhost:3000/api/public
 * 	http://localhost:3000/api/admin
 */

import { Request, Response } from 'express';

class APIController {
    getWelcomeToAPI(req: Request, res: Response) {
        return res.json({
            welcome: 'Welcome to GALHARDO APP API!',
            public: 'You can see PULBLIC API endpoints acessing URL: /api/public',
            admin: 'You can see ADMIN endpoints acessing URL: /api/admin',
            responses: 'All responses are in JSON',
            alert: 'Only ADMIN can make CRUD operations!',
        });
    }

    getPublicEndpoints(req: Request, res: Response) {
        return res.json({
            blog: 'GET /api/public/blog',
            games: 'GET /api/public/games',
            books: 'GET /api/public/books',
            movies: 'GET /api/public/movies',
            tvshows: 'GET /api/public/tvshows',
        });
    }

    getAdminEndpoints(req: Request, res: Response) {
        return res.json({
            message:
                'ADMIN endpoints need JWT in Header Authorization Bearer Token to access endpoints!',
        });
    }
}

export default new APIController();
