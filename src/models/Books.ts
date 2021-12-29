import DateTime from '@helpers/DateTime';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type bookObject = {
    id: string;
    title: string;
    year_release: number;
    price: number;
    image: string;
    genres: string;
    pages: string;
    author: string;
    amazon_link: string;
    resume: string;
    updated_at: string;
};

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

    getById(book_id: string) {
        return prisma.book.findUnique({
            where: {
                id: book_id,
            },
        });
    }

    searchTitle(bookTitle: string) {
        return prisma.book.findMany({
            where: {
                title: {
                    contains: bookTitle,
                    mode: 'insensitive',
                },
            },
        });
    }

    create(bookObject: bookObject) {
        return prisma.book.create({
            data: {
                title: bookObject.title,
                year_release: parseInt(bookObject.year_release),
                price: bookObject.price,
                image: bookObject.image,
                genres: bookObject.genres,
                pages: parseInt(bookObject.pages),
                author: bookObject.author,
                amazon_link: bookObject.amazon_link,
                resume: bookObject.resume,
            },
        });
    }

    update(bookObject: bookObject) {
        return prisma.book.update({
            where: {
                id: bookObject.id,
            },
            data: {
                id: bookObject.id,
                title: bookObject.title,
                year_release: parseInt(bookObject.year_release),
                price: bookObject.price,
                image: bookObject.image,
                genres: bookObject.genres,
                pages: parseInt(bookObject.pages),
                author: bookObject.author,
                amazon_link: bookObject.amazon_link,
                resume: bookObject.resume,
                updated_at: new Date(),
            },
        });
    }

    delete(book_id: string) {
        return prisma.book.delete({
            where: {
                id: book_id,
            },
        });
    }
}

export default new Books();
