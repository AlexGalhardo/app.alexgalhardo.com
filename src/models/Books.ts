import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class Books {
  static async getRandom() {
    const totalGames = await prisma.book.count();
    const skip = Math.floor(Math.random() * totalGames);
    return await prisma.book.findMany({
      take: 1,
      skip,
    });
  }

  static async getTotal() {
    return await prisma.book.count();
  }
}
