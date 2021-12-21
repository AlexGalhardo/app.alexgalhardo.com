import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  User: {
    fullName: (user) => `alex galhardo`,
  },
  Query: {
    users: async () => {
      return await prisma.user.findMany();
    },
    user: async (_, { id }) => {
      return await prisma.user.findUnique({
        where: {
          id,
        },
      });
    },
    findUserByEmail: async (_, { email }) => {
      return await prisma.user.findUnique({
        where: {
          email,
        },
      });
    },
    games: async () => {
      return await prisma.game.findMany();
    },
    books: async () => {
      return await prisma.book.findMany();
    },
    movies: async () => {
      return await prisma.movie.findMany();
    },
    tvshows: async () => {
      return await prisma.tvshow.findMany();
    },
  },
  Mutation: {
    createUser: async (_, { data }, { pubSub }) => {
      return { name: 'alex' };
    },

    updateUser: async (_, { id, data }) => 'atualizado',

    deleteUser: async (_, { id }) => 'deleted',
  },
  Subscription: {
    userAdded: {
      subscribe: (obj, args, context) => context.hello,
    },
  },
};
