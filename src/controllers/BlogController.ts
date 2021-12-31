/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * http://localhost:3000/blog
 */

import { Request, Response } from 'express';
import pagination from 'pagination';

import DateTime from '../helpers/DateTime';
import Header from '../helpers/Header';
// import Blog from '../models/Blog';
import Blog from '../models/JSON/Blog';

class BlogController {
    async getViewBlog(req: Request, res: Response) {
        const totalBlogPosts = await Blog.getTotal();
        const blogPostsPerPage = 4;

        let { page } = req.params;

        if (!page) {
            page = 1;
        }

        const blog = await Blog.getPostsByPageLimit(page, blogPostsPerPage);

        res.render('pages/blog/blog', {
            blog,
            user: SESSION_USER,
            blog_active: true,
            boostrapPaginator: BlogController.getRenderBootstrapPaginator(
                page,
                blogPostsPerPage,
                totalBlogPosts
            ),
            header: Header.blog(),
        });
    }

    getSearchBlogTitle(req: Request, res: Response) {
        const blogPosts = Blog.getAll();
        const searchBlogTitle = req.query.blogTitle;

        if (!searchBlogTitle) {
            return res.redirect('/blog');
        }

        const blogTitlesSearched = blogPosts.filter(
            (blogPost) =>
                blogPost.title
                    .toLowerCase()
                    .indexOf(searchBlogTitle.toLowerCase()) > -1
        );

        const totalBlogPostsFoundFromSearch = blogTitlesSearched.length;

        res.render('pages/blog/blog', {
            blog: blogTitlesSearched,
            searchBlogTitle,
            totalBlogPostsFoundFromSearch,
            header: Header.blog(),
        });
    }

    async getViewBlogPost(req: Request, res: Response) {
        const { slug } = req.params;

        const blogPost = await Blog.getBySlug(slug);

        res.render('pages/blog/blogPost', {
            user: SESSION_USER,
            blogPost,
            header: Header.blogPost(blogPost.title),
        });
    }

    static getRenderBootstrapPaginator(
        current,
        blogPostsPerPage,
        totalBlogPosts,
        searchBlogTitle
    ) {
        let prelinkUrl = '/blog/';

        if (false) {
            prelinkUrl = `/ blog / search ? blogTitle = ${searchBlogTitle} `;
        }

        return new pagination.TemplatePaginator({
            prelink: prelinkUrl,
            current,
            rowsPerPage: blogPostsPerPage,
            totalResult: totalBlogPosts,
            slashSeparator: true,
            template(result) {
                let i;
                let len;
                let prelink;
                let html = '<div><ul class="pagination">';
                if (result.pageCount < 2) {
                    html += '</ul></div>';
                    return html;
                }
                prelink = this.preparePreLink(result.prelink);
                if (result.previous) {
                    html += `<li class="page-item"><a class="page-link" href="${prelink}${result.previous
                        }">${this.options.translator('PREVIOUS')}</a></li>`;
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
                    html += `<li class="page-item"><a class="page-link" href="${prelink}${result.next
                        }" class="paginator-next">${this.options.translator(
                            'NEXT'
                        )}</a></li>`;
                }
                html += '</ul></div>';
                return html;
            },
        }).render();
    }

    async postBlogComment(req: Request, res: Response) {
        const { slug } = req.params;
        const { blog_comment } = req.body;

        const blogComment = {
            user_id: req.session.userID,
            user_logged_can_delete: true,
            user_name: SESSION_USER.name,
            user_avatar: SESSION_USER.avatar,
            comment: blog_comment,
            created_at: DateTime.getNow(),
        };

        const blogPost = await Blog.createComment(slug, blogComment);

        if (!blogPost) {
            return res.redirect('/blog');
        }

        blogPost = await BlogController.fixComments(blogPost);

        req.flash('success', 'Comment Created!');
        return res.redirect(`/ blog / ${slug} `);
    }

    async getDeleteBlogCommentByCommentID(req: Request, res: Response) {
        const { slug, comment_id } = req.params;

        let blogPost = await Blog.deleteCommentByID(slug, comment_id);

        if (!blogPost) {
            return res.redirect(`/ blog / ${slug} `);
        }

        blogPost = await BlogController.fixComments(blogPost);

        req.flash('success', 'Comment Deleted!');
        return res.redirect(`/ blog / ${slug} `);
    }
}

export default new BlogController();
