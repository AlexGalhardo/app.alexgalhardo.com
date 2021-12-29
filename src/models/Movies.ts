import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type movieObject = {
    id: string;
    title: string;
    year_release: number;
    image: string;
    tmdb_link: string;
    tmdb_rating: string;
    justwatch_link: string;
    resume: string;
    duration: string;
    genres: string;
};

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

    getById(movie_id: string) {
        return prisma.movie.findUnique({
            where: {
                id: movie_id,
            },
        });
    }

    searchTitle(movieTitle: string) {
        return prisma.movie.findMany({
            where: {
                title: {
                    contains: movieTitle,
                    mode: 'insensitive',
                },
            },
        });
    }

    create(movieObject: movieObject) {
        return prisma.movie.create({
            data: {
                title: movieObject.title,
                year_release: parseInt(movieObject.year_release),
                image: movieObject.image,
                tmdb_link: movieObject.tmdb_link,
                tmdb_rating: parseInt(movieObject.tmdb_rating),
                justwatch_link: movieObject.justwatch_link,
                resume: movieObject.resume,
                duration: movieObject.duration,
                genres: movieObject.genres,
            },
        });
    }

    update(movieObject: movieObject) {
        return prisma.movie.update({
            where: {
                id: movieObject.id,
            },
            data: {
                id: movieObject.id,
                title: movieObject.title,
                year_release: parseInt(movieObject.year_release),
                image: movieObject.image,
                tmdb_link: movieObject.tmdb_link,
                tmdb_rating: parseInt(movieObject.tmdb_rating),
                justwatch_link: movieObject.justwatch_link,
                resume: movieObject.resume,
                duration: movieObject.duration,
                genres: movieObject.genres,
                updated_at: new Date(),
            },
        });
    }

    delete(movie_id: string) {
        return prisma.movie.delete({
            where: {
                id: movie_id,
            },
        });
    }
}

export default new Movies();
