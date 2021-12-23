import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Movies {
    getAll() {
        return prisma.movie.findMany();
    }

    async getRandom() {
        const skip = Math.floor(Math.random() * (await prisma.movie.count()));
        return prisma.movie.findMany({
            take: 1,
            skip,
        });
    }

    getTotal() {
        return prisma.movie.count();
    }

    getByID(movie_id: string) {
        return prisma.movie.findUnique({
            where: {
                id: movie_id,
            },
        });
    }
}

export default new Movies();
