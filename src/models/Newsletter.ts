import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Newsletter {
    static async addEmail(email: string) {
        const emailAlreadyInNewsletter = await prisma.newsletter.findUnique({
            where: {
                email,
            },
        });

        if (emailAlreadyInNewsletter) {
            await prisma.newsletter.delete({
                where: {
                    email,
                },
            });
            return false;
        }

        return prisma.newsletter.create({
            data: {
                email,
            },
        });
    }
}

export default Newsletter;
