import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class Blog {
  static async getRandom() {
    const totalBlogPosts = await prisma.blog.count();
    const skip = Math.floor(Math.random() * totalBlogPosts);
    return await prisma.blog.findMany({
      take: 1,
      skip,
    });
  }

  static async getTotal() {
    return await prisma.blog.count();
  }
}
