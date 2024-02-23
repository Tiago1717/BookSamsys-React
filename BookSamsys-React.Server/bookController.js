const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.addBook = async (req, res) => {
    try {
        const { isbn, title, author, price } = req.body;
        const book = new Book({ isbn, title, author, price });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const { isbn } = req.params;
        const updatedBook = await Book.findOneAndUpdate({ isbn }, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const { isbn } = req.params;
        const deletedBook = await Book.findOneAndDelete({ isbn });
        if (!deletedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(deletedBook);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
+