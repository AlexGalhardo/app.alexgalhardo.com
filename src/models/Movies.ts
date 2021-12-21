import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class Movies {
  static async getRandom() {
    const totalGames = await prisma.movie.count();
    const skip = Math.floor(Math.random() * totalGames);
    return await prisma.movie.findMany({
      take: 1,
      skip,
    });
  }

  static async getTotal() {
    return await prisma.movie.count();
  }
}
