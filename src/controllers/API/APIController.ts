import { Request, Response } from "express";

export default class APIController {
    static getWelcomeToAPI(req: Request, res: Response) {
        return res.json({
            welcome: "Welcome to GALHARDO APP API!",
            public: "You can see PULBLIC API endpoints acessing URL: /api/public",
            admin: "You can see ADMIN endpoints acessing URL: /api/admin",
            responses: "All responses are in JSON",
            alert: "Only ADMIN can make CRUD operations!",
        });
    }

    static getPublicEndpoints(req: Request, res: Response) {
        return res.json({
            blog: "GET /api/public/blog",
            games: "GET /api/public/games",
            books: "GET /api/public/books",
            movies: "GET /api/public/movies",
            tvshows: "GET /api/public/tvshows",
        });
    }

    static getAdminEndpoints(req: Request, res: Response) {
        return res.json({
            message: "ADMIN endpoints need JWT in Header Authorization Bearer Token to access endpoints!",
        });
    }
}
