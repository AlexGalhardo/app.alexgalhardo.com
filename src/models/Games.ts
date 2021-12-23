import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
}

export default new Games();
