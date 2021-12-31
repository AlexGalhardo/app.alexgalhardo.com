import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';

const prisma = new PrismaClient();

type blogObject = {
    id: string;
    title: string;
    image: string;
    category: string;
    slug: string;
    resume: string;
    body: string;
};

class Blog {
    getAll() {
        return prisma.blog.findMany();
    }

    async getRandom() {
        const skip = Math.floor(Math.random() * (await prisma.blog.count()));
        return prisma.blog.findMany({
            take: 1,
            skip,
        });
    }

    getTotal() {
        return prisma.blog.count();
    }

    getById(blog_id: string) {
        return prisma.blog.findUnique({
            where: {
                id: blog_id,
            },
        });
    }

    searchTitle(blogTitle: string) {
        return prisma.blog.findMany({
            where: {
                title: {
                    contains: blogTitle,
                    mode: 'insensitive',
                },
            },
        });
    }

    create(blogObject: blogObject) {
        return prisma.blog.create({
            data: {
                title: blogObject.title,
                image: blogObject.image,
                category: blogObject.category,
                slug: slugify(blogObject.title),
                resume: blogObject.resume,
                body: blogObject.body,
            },
        });
    }

    update(blogObject: blogObject) {
        return prisma.blog.update({
            where: {
                id: blogObject.id,
            },
            data: {
                id: blogObject.id,
                title: blogObject.title,
                image: blogObject.image,
                category: blogObject.category,
                slug: blogObject.slug,
                resume: blogObject.resume,
                body: blogObject.body,
                updated_at: new Date(),
            },
        });
    }

    delete(blog_id: string) {
        return prisma.blog.delete({
            where: {
                id: blog_id,
            },
        });
    }

    getPostsByPageLimit(page: number, blogPostsPerPage: number) {
        const offset = parseInt(page * blogPostsPerPage - blogPostsPerPage);
        const getUntil = parseInt(page * blogPostsPerPage);
        return prisma.blog.findMany({
            skip: offset,
            take: getUntil,
        });
    }

    getBySlug(slug: string) {
        return prisma.blog.findUnique({
            where: {
                slug,
            },
        });
    }
}

export default new Blog();
