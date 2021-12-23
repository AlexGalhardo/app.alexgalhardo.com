import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class TVShows {
    getAll() {
        return prisma.tvshow.findMany();
    }

    async getRandom() {
        const skip = Math.floor(Math.random() * (await prisma.tvshow.count()));
        return prisma.tvshow.findMany({
            take: 1,
            skip,
        });
    }

    getTotal() {
        return prisma.tvshow.count();
    }

    getByID(tvshow_id: string) {
        return prisma.tvshow.findUnique({
            where: {
                id: tvshow_id,
            },
        });
    }
}

export default new TVShows();
