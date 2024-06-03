import { Movie } from "@prisma/client";
import prisma from "../config/prisma";
import { CreateMovieDTO } from "../utils/DTOs";

export default class MoviesRepository {
    static getAll(): Promise<Movie[]> {
        return prisma.movie.findMany();
    }

    static async getRandom(): Promise<Movie[]> {
        const skip = Math.floor(Math.random() * (await prisma.movie.count()));
        return prisma.movie.findMany({
            take: 1,
            skip,
        });
    }

    static getTotal() {
        return prisma.movie.count();
    }

    static getById(movie_id: string) {
        return prisma.movie.findUnique({
            where: {
                id: movie_id,
            },
        });
    }

    static searchTitle(movieTitle: string) {
        return prisma.movie.findMany({
            where: {
                title: {
                    contains: movieTitle,
                    mode: "insensitive",
                },
            },
        });
    }

    static create({
        title,
        year_release,
        image,
        tmdb_link,
        tmdb_rating,
        justwatch_link,
        resume,
        duration,
        genres,
    }: CreateMovieDTO) {
        return prisma.movie.create({
            data: {
                title,
                year_release: Number(year_release),
                image,
                tmdb_link,
                tmdb_rating: Number(tmdb_rating),
                justwatch_link,
                resume,
                duration,
                genres,
            },
        });
    }

    static update({
        id,
        title,
        year_release,
        image,
        tmdb_link,
        tmdb_rating,
        justwatch_link,
        resume,
        duration,
        genres,
    }: CreateMovieDTO) {
        return prisma.movie.update({
            where: {
                id,
            },
            data: {
                id,
                title,
                year_release: Number(year_release),
                image,
                tmdb_link,
                tmdb_rating: Number(tmdb_rating),
                justwatch_link,
                resume,
                duration,
                genres,
                updated_at: new Date(),
            },
        });
    }

    static delete(movie_id: string) {
        return prisma.movie.delete({
            where: {
                id: movie_id,
            },
        });
    }
}
