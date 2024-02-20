import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookItem from './BookItem';

const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3000/api/books');
                setBooks(response.data);
                setError(null);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchBooks();
    }, []);

    return { books, loading, error };
};

const BookList = () => {
    const { books, loading, error } = useBooks();

    return (
        <div>
            <h2>Book List</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching books: {error.message}</p>}
            {books.length > 0 ? (
                <ul>
                    {books.map((book) => (
                        <BookItem key={book.id} book={book} />
                    ))}
                </ul>
            ) : (
                <p>No books to display</p>
            )}
        </div>
    );
};

export default BookList;
