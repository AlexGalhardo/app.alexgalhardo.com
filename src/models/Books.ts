import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Books {
    getAll() {
        return prisma.book.findMany();
    }

    async getRandom() {
        const skip = Math.floor(Math.random() * (await prisma.book.count()));
        return prisma.book.findMany({
            take: 1,
            skip,
        });
    }

    getTotal() {
        return prisma.book.count();
    }

    getByID(book_id: string) {
        return prisma.book.findUnique({
            where: {
                id: book_id,
            },
        });
    }
}

export default new Books();
