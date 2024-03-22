import React from 'react';

const BookDetails = ({ book }) => {
    return (
        <div>
            <h2>{book.title}</h2>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> {book.price}</p>
            <p>{book.description}</p>
        </div>
    );
};

export default BookDetails;
