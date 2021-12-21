import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class Games {
  static async getRandom() {
    const totalGames = await prisma.game.count();
    const skip = Math.floor(Math.random() * totalGames);
    return await prisma.game.findMany({
      take: 1,
      skip,
    });
  }

  static async getTotal() {
    return await prisma.game.count();
  }

  static async getById(game_id: string) {
    return await prisma.game.findUnique({
      where: {
        id: game_id,
      },
    });
  }
}
