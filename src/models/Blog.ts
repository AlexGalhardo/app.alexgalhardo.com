import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Blog {
    getAll() {
        return prisma.blog.findMany();
    }

    async getRandom() {
        const skip = Math.floor(Math.random() * (await prisma.blog.count()));
        return prisma.blog.findMany({
            take: 1,
            skip,
        });
    }

    getTotal() {
        return prisma.blog.count();
    }

    getByID(blog_id: string) {
        return prisma.blog.findUnique({
            where: {
                id: blog_id,
            },
        });
    }
}

export default new Blog();
