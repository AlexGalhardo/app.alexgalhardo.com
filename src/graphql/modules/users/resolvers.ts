import Bcrypt from '@helpers/Bcrypt';
import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';

const prisma = new PrismaClient();

export default {
    Query: {
        users: async () => {
            return prisma.user.findMany();
        },
        user: async (_, { id }) => {
            return prisma.user.findUnique({
                where: {
                    id,
                },
            });
        },
        findUserByEmail: async (_, { email }) => {
            return prisma.user.findUnique({
                where: {
                    email,
                },
            });
        },
        games: async () => {
            return prisma.game.findMany();
        },
        books: async () => {
            return prisma.book.findMany();
        },
        movies: async () => {
            return prisma.movie.findMany();
        },
        tvshows: async () => {
            return prisma.tvshow.findMany();
        },
    },
    Mutation: {
        createUser: async (_, { UserInput }) => {
            return prisma.user.create({
                data: {
                    name: UserInput.name,
                    email: UserInput.email,
                    password: await Bcrypt.hash(UserInput.password),
                    document: UserInput.document,
                    phone: UserInput.phone,
                    birth_date: UserInput.birth_date,
                    address_zipcode: UserInput.address_zipcode,
                    address_street: UserInput.address_street,
                    address_street_number: UserInput.address_street_number,
                    address_neighborhood: UserInput.address_neighborhood,
                    address_city: UserInput.address_city,
                    address_state: UserInput.address_state,
                    address_country: UserInput.address_country,
                },
            });
        },
        createBlog: async (_, { data }) => {
            return prisma.blog.create({
                data: {
                    title: data.title,
                    resume: data.resume,
                    image: data.image,
                    category: data.category,
                    body: data.body,
                    slug: slugify(data.title),
                },
            });
        },
        createGame: async (_, { data }) => {
            return prisma.game.create({
                data: {
                    title: data.title,
                    year_release: data.year_release,
                    price: data.price,
                    resume: data.resume,
                    image: data.image,
                    igdb_link: data.igdb_link,
                    igdb_rating: data.igdb_rating,
                    platforms: data.platforms,
                    developer: data.developer,
                    genres: data.genres,
                    amazon_link: data.amazon_link,
                },
            });
        },
        createBook: async (_, { data }) => {
            return prisma.book.create({
                data: {
                    title: data.title,
                    year_release: data.year_release,
                    price: data.price,
                    author: data.author,
                    resume: data.resume,
                    image: data.image,
                    pages: data.pages,
                    genres: data.genres,
                    amazon_link: data.amazon_link,
                },
            });
        },
        createMovie: async (_, { data }) => {
            return prisma.movie.create({
                data: {
                    title: data.title,
                    year_release: data.year_release,
                    image: data.image,
                    tmdb_link: data.tmdb_link,
                    tmdb_rating: data.tmdb_rating,
                    resume: data.resume,
                    duration: data.duration,
                    genres: data.genres,
                },
            });
        },
        createTVShow: async (_, { data }) => {
            return prisma.tvshow.create({
                data: {
                    title: data.title,
                    year_release: data.year_release,
                    image: data.image,
                    tmdb_link: data.tmdb_link,
                    tmdb_rating: data.tmdb_rating,
                    resume: data.resume,
                    duration: data.duration,
                    genres: data.genres,
                },
            });
        },
    },
};
