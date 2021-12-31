import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type gameObject = {
    id: string;
    title: string;
    price: number;
    year_release: number;
    platforms: string;
    genres: string;
    developer: string;
    image: string;
    igdb_link: string;
    igdb_rating: number;
    amazon_link: string;
    resume: string;
};

class Games {
    getAll() {
        return prisma.game.findMany();
    }

    async getRandom() {
        const skip = Math.floor(Math.random() * (await prisma.game.count()));
        const game = await prisma.game.findMany({
            take: 1,
            skip,
        });

        if (SESSION_USER) {
            let { shop_cart_itens } = await prisma.user.findUnique({
                where: {
                    id: SESSION_USER.id,
                },
                select: {
                    shop_cart_itens: true,
                },
            });

            shop_cart_itens = JSON.parse(shop_cart_itens);

            game[0].inLoggedUserCart = await shop_cart_itens.some(
                (item) => item.id === game[0].id
            );

            return game[0];
        }

        game[0].inLoggedUserCart = false;

        return game[0];
    }

    getTotal() {
        return prisma.game.count();
    }

    getById(game_id: string) {
        return prisma.game.findUnique({
            where: {
                id: game_id,
            },
        });
    }

    searchTitle(gameTitle: string) {
        return prisma.game.findMany({
            where: {
                title: {
                    contains: gameTitle,
                    mode: 'insensitive',
                },
            },
        });
    }

    create(gameObject: gameObject) {
        return prisma.game.create({
            data: {
                title: gameObject.title,
                price: parseInt(gameObject.price),
                year_release: parseInt(gameObject.year_release),
                platforms: gameObject.platforms,
                genres: gameObject.genres,
                developer: gameObject.developer,
                image: gameObject.image,
                igdb_link: gameObject.igdb_link,
                igdb_rating: parseInt(gameObject.igdb_rating),
                amazon_link: gameObject.amazon_link,
                resume: gameObject.resume,
            },
        });
    }

    update(gameObject: gameObject) {
        return prisma.game.update({
            where: {
                id: gameObject.id,
            },
            data: {
                id: gameObject.id,
                title: gameObject.title,
                price: parseInt(gameObject.price),
                year_release: parseInt(gameObject.year_release),
                platforms: gameObject.platforms,
                genres: gameObject.genres,
                developer: gameObject.developer,
                image: gameObject.image,
                igdb_link: gameObject.igdb_link,
                igdb_rating: parseInt(gameObject.igdb_rating),
                amazon_link: gameObject.amazon_link,
                resume: gameObject.resume,
                updated_at: new Date(),
            },
        });
    }

    delete(game_id: string) {
        return prisma.game.delete({
            where: {
                id: game_id,
            },
        });
    }
}

export default new Games();
