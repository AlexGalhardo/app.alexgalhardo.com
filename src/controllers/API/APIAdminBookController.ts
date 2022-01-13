import DateTime from '../../helpers/DateTime';
import Books from '../../models/JSON/Books';

class APIAdminBookController {
    static async getAllBooks(req, res) {
        const books = await Books.getAll();
        res.json({
            books,
        });
    }

    static async postCreateBook(req, res) {
        const {
            title,
            year_release,
            image,
            amazon_link,
            resume,
            pages,
            genres,
            author,
        } = req.body;

        const bookObject = {
            id: null,
            title,
            year_release,
            image,
            amazon_link,
            resume,
            pages,
            genres,
            author,
            created_at: DateTime.getNow(),
            updated_at: DateTime.getNow(),
        };

        const bookCreated = await Books.create(bookObject);

        if (bookCreated) return res.json(bookCreated);

        return res.json({ error: 'Book NOT registred in DataBase!' });
    }

    static async patchBook(req, res, next) {
        try {
            const { book_id } = req.params;

            const {
                title,
                year_release,
                image,
                amazon_link,
                resume,
                pages,
                genres,
                author,
            } = req.body;

            const bookObject = {
                id: book_id,
                title,
                year_release,
                image,
                amazon_link,
                resume,
                pages,
                genres,
                author,
                updated_at: DateTime.getNow(),
            };

            const bookUpdated = await Books.update(bookObject);

            return res.json({
                bookUpdated,
            });
        } catch (err) {
            next(err);
        }
    }

    static async deleteBook(req, res, next) {
        try {
            const { book_id } = req.params;

            await Books.delete(book_id);

            return res.json({
                status: `Book ID ${book_id} DELETED!`,
            });
        } catch (err) {
            next(err);
        }
    }
}

export default APIAdminBookController;
