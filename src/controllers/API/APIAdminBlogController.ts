import DateTime from '../../helpers/DateTime';
import Blog from '../../models/JSON/Blog';

class APIAdminBlogController {
    static async postCreateBlogPost(req, res, next) {
        try {
            const { title, resume, image, category, body } = req.body;

            const blogObject = {
                title,
                resume,
                image,
                category,
                body,
                created_at: DateTime.getNow(),
                updated_at: DateTime.getNow(),
                comments: [],
            };

            const blogPostCreated = await Blog.create(blogObject);

            return res.json({
                blogPostCreated,
            });
        } catch (err) {
            next(err);
        }
    }

    static async patchBlogPost(req, res, next) {
        try {
            const { blog_id } = req.params;

            const { title, resume, image, category, body } = req.body;

            const blogObject = {
                id: blog_id,
                title,
                resume,
                image,
                category,
                body,
                updated_at: DateTime.getNow(),
            };

            const blogPostUpdated = await Blog.update(blogObject);

            return res.json({
                blogPostUpdated,
            });
        } catch (err) {
            next(err);
        }
    }

    static async deleteBlogPost(req, res, next) {
        try {
            const { blog_id } = req.params;

            await Blog.delete(blog_id);

            return res.json({
                status: `Blog Post ID ${blog_id} DELETED!`,
            });
        } catch (err) {
            next(err);
        }
    }
}

export default APIAdminBlogController;
