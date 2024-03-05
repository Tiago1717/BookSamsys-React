import { useState, useEffect } from 'react';
import BookList from './BookList';
import AddBook from './AddBook';
import EditBook from './EditBook';
import DeleteBook from './DeleteBook';
import axios from 'axios';

const App = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://3000/api/books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleBookSelect = (book) => {
        setSelectedBook(book);
    };

    return (
        <div>
            <h1>My Bookstore</h1>
            <BookList books={books} onSelect={handleBookSelect} />
            <AddBook refreshBooks={fetchBooks} />
            {selectedBook && (
                <>
                    <EditBook book={selectedBook} />
                    <DeleteBook isbn={selectedBook.isbn} refreshBooks={fetchBooks} />
                </>
            )}
        </div>
    );
};

export default App;
