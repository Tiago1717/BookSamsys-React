import React from 'react';
import Book from './Book';

const BookList = ({ books }) => {
    return (
        <div className="book-list">
            <h2>Book List</h2>
            {books.map((book) => (
                <Book key={book.id} title={book.title} author={book.author} isbn={book.isbn} />
            ))}
        </div>
    );
};

export default BookList;
