import DateTime from '../../helpers/DateTime';
import Games from '../../models/Games';

class APIAdminGameController {
    async postCreateGame(req, res) {
        const {
            title,
            year_release,
            resume,
            image,
            igdb_link,
            igdb_rating,
            platforms,
            developer,
            genres,
            amazon_link,
        } = req.body;

        const gameObject = {
            title,
            year_release,
            resume,
            image,
            igdb_link,
            igdb_rating,
            platforms,
            developer,
            genres,
            amazon_link,
            created_at: DateTime.getNow(),
            updated_at: DateTime.getNow(),
        };

        const gameCreated = await Games.create(gameObject);

        gameObject.id = gameCreated.insertId;

        if (gameCreated) return res.json(gameCreated);

        return res.json({ error: 'Game NOT Created!' });
    }

    async patchGame(req, res, next) {
        try {
            const { game_id } = req.params;

            const {
                title,
                year_release,
                resume,
                image,
                igdb_link,
                igdb_rating,
                platforms,
                developer,
                genres,
                amazon_link,
            } = req.body;

            const gameObject = {
                id: game_id,
                title,
                year_release,
                resume,
                image,
                igdb_link,
                igdb_rating,
                platforms,
                developer,
                genres,
                amazon_link,
                updated_at: DateTime.getNow(),
            };

            const gameUpdated = await Games.update(gameObject);

            return res.json({
                gameUpdated,
            });
        } catch (err) {
            next(err);
        }
    }

    async deleteGame(req, res, next) {
        try {
            const { game_id } = req.params;

            const gameDeleted = await Games.delete(game_id);

            return res.json({
                status: gameDeleted,
            });
        } catch (err) {
            next(err);
        }
    }
}

export default new APIAdminGameController();
