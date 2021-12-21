import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class TVShows {
  static async getRandom() {
    const totalGames = await prisma.tvshow.count();
    const skip = Math.floor(Math.random() * totalGames);
    return await prisma.tvshow.findMany({
      take: 1,
      skip,
    });
  }

  static async getTotal() {
    return await prisma.tvshow.count();
  }
}
