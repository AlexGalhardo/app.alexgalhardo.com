import { PrismaClient } from '@prisma/client';

import { inputGameObject } from '../helpers/InputTypes';

const prisma = new PrismaClient();

export default class Games {
    static getAll() {
        return prisma.game.findMany();
    }

    static async getRandom() {
        const skip = Math.floor(Math.random() * (await prisma.game.count()));
        const game = await prisma.game.findMany({
            take: 1,
            skip,
        });

        if (global.SESSION_USER && global.SESSION_USER.shop_cart_itens) {
            let { shop_cart_itens } = await prisma.user.findUnique({
                where: {
                    id: global.SESSION_USER.id,
                },
                select: {
                    shop_cart_itens: true,
                },
            });

            shop_cart_itens = JSON.parse(shop_cart_itens);

            if (shop_cart_itens.length) {
                game[0].inLoggedUserCart = await shop_cart_itens.some(
                    (item) => item.id === game[0].id
                );
                return game[0];
            }
        }

        game[0].inLoggedUserCart = false;

        return game[0];
    }

    static getTotal() {
        return prisma.game.count();
    }

    static getById(game_id: string) {
        return prisma.game.findUnique({
            where: {
                id: game_id,
            },
        });
    }

    static searchTitle(gameTitle: string) {
        return prisma.game.findMany({
            where: {
                title: {
                    contains: gameTitle,
                    mode: 'insensitive',
                },
            },
        });
    }

    static create(gameObject: inputGameObject) {
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

    static update(gameObject: inputGameObject) {
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

    static delete(game_id: string) {
        return prisma.game.delete({
            where: {
                id: game_id,
            },
        });
    }
}
