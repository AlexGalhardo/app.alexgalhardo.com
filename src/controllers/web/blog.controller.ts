import { Request, Response } from "express";
import pagination from "pagination";
import edge from "../../config/edge";

import Header from "../../utils/Header";
import BlogRepository from "../../repositories/blog.repository";

export default class BlogController {
    static async getViewBlog(req: Request, res: Response) {
        try {
            const totalBlogPosts = await BlogRepository.getTotal();
            const blogPostsPerPage = 4;

            let { page } = req.params;

            if (!page) {
                page = 1;
            }

            const blog = await BlogRepository.getPostsByPageLimit(Number(page), blogPostsPerPage);

            return res.setHeader("Content-Type", "text/html").end(
                await edge.render("pages/blog/blog", {
                    blog,
                    user: global.SESSION_USER,
                    blog_active: true,
                    boostrapPaginator: BlogController.getRenderBootstrapPaginator(
                        Number(page),
                        blogPostsPerPage,
                        totalBlogPosts,
                    ),
                    header: Header.blog(),
                }),
            );
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async getSearchBlogTitle(req: Request, res: Response) {
        const blogPosts = await BlogRepository.getAll();
        const searchBlogTitle = req.query.blogTitle;

        if (!searchBlogTitle) {
            return res.redirect("/blog");
        }

        const blogTitlesSearched = blogPosts.filter(
            (blogPost) => blogPost.title.toLowerCase().indexOf(String(searchBlogTitle).toLowerCase()) > -1,
        );

        const totalBlogPostsFoundFromSearch = blogTitlesSearched.length;

        return res.render("pages/blog/blog", {
            blog: blogTitlesSearched,
            searchBlogTitle,
            totalBlogPostsFoundFromSearch,
            header: Header.blog(),
        });
    }

    static async getViewBlogPost(req: Request, res: Response) {
        const { slug } = req.params;

        const blogPost = await BlogRepository.getBySlug(slug);

        res.render("pages/blog/blogPost", {
            user: global.SESSION_USER,
            blogPost,
            header: Header.blogPost(blogPost!.title),
        });
    }

    static getRenderBootstrapPaginator(current: number, blogPostsPerPage: number, totalBlogPosts: number) {
        return new pagination.TemplatePaginator({
            prelink: "/blog/",
            current,
            rowsPerPage: blogPostsPerPage,
            totalResult: totalBlogPosts,
            slashSeparator: true,
            template(result: any) {
                let i;
                let len;
                let html = '<div><ul class="pagination">';
                if (result.pageCount < 2) {
                    html += "</ul></div>";
                    return html;
                }
                const prelink = this.preparePreLink(result.prelink);
                if (result.previous) {
                    html += `<li class="page-item"><a class="page-link" href="${prelink}${
                        result.previous
                    }">${this.options.translator("PREVIOUS")}</a></li>`;
                }
                if (result.range.length) {
                    for (i = 0, len = result.range.length; i < len; i++) {
                        if (result.range[i] === result.current) {
                            html += `<li class="active page-item"><a class="page-link" href="${prelink}${result.range[i]}">${result.range[i]}</a></li>`;
                        } else {
                            html += `<li class="page-item"><a class="page-link" href="${prelink}${result.range[i]}">${result.range[i]}</a></li>`;
                        }
                    }
                }
                if (result.next) {
                    html += `<li class="page-item"><a class="page-link" href="${prelink}${
                        result.next
                    }" class="paginator-next">${this.options.translator("NEXT")}</a></li>`;
                }
                html += "</ul></div>";
                return html;
            },
        }).render();
    }
}
