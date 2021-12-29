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
        return prisma.game.findMany({
            take: 1,
            skip,
        });
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
            },
        });
    }
}

export default new Games();
