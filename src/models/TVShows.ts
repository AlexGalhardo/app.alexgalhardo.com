import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type tvShowObject = {
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

    getById(tvshow_id: string) {
        return prisma.tvshow.findUnique({
            where: {
                id: tvshow_id,
            },
        });
    }

    searchTitle(tvShowTitle: string) {
        return prisma.tvshow.findMany({
            where: {
                title: {
                    contains: tvShowTitle,
                    mode: 'insensitive',
                },
            },
        });
    }

    create(tvShowObject: tvShowObject) {
        return prisma.tvshow.create({
            data: {
                title: tvShowObject.title,
                year_release: parseInt(tvShowObject.year_release),
                image: tvShowObject.image,
                tmdb_link: tvShowObject.tmdb_link,
                tmdb_rating: parseInt(tvShowObject.tmdb_rating),
                justwatch_link: tvShowObject.justwatch_link,
                resume: tvShowObject.resume,
                duration: tvShowObject.duration,
                genres: tvShowObject.genres,
            },
        });
    }

    update(tvShowObject: tvShowObject) {
        return prisma.tvshow.update({
            where: {
                id: tvShowObject.id,
            },
            data: {
                id: tvShowObject.id,
                title: tvShowObject.title,
                year_release: parseInt(tvShowObject.year_release),
                image: tvShowObject.image,
                tmdb_link: tvShowObject.tmdb_link,
                tmdb_rating: parseInt(tvShowObject.tmdb_rating),
                justwatch_link: tvShowObject.justwatch_link,
                resume: tvShowObject.resume,
                duration: tvShowObject.duration,
                genres: tvShowObject.genres,
                updated_at: new Date(),
            },
        });
    }

    delete(movie_id: string) {
        return prisma.tvshow.delete({
            where: {
                id: movie_id,
            },
        });
    }
}

export default new TVShows();
