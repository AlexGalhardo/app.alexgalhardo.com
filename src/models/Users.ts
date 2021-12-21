import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface IUser { }

export default class Users implements IUser { }
