import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type findOneDataProp = {
  id?: number;
  email?: string;
};

type createDataProp = {
  email: string;
  name: string;
  age?: number;
};

export default {
  User: {
    fullName: (user) => `alex galhardo`,
  },
  Query: {
    users: async () => {
      return [
        {
          _id: 'aiuhsiuahiusa12',
          firstName: 'Alex',
          lastName: 'Galhardo',
          fullName: 'Alex Galhardo',
          email: 'aleexgvieira@gmail.com',
          active: true,
        },
        {
          _id: 'aiuhsiuahiusa12',
          firstName: 'Alex',
          lastName: 'Galhardo',
          fullName: 'Alex Galhardo',
          email: 'aleexgvieira@gmail.com',
          active: true,
        },
      ];
    },
    user: async (_, { id }) => {
      return {
        _id: 'aiuhsiuahiusa12',
        firstName: 'Alex',
        lastName: 'Galhardo',
        fullName: 'Alex Galhardo',
        email: 'aleexgvieira@gmail.com',
        active: true,
      };
    },
    findOne: async (_, { data }) => {
      return await prisma.user.findUnique({
        where: data,
      });
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
