import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onDelete }) => {
    const { isbn, name, author, price } = book;

    return (
        <div className="book">
            <p><strong>ISBN:</strong> {isbn}</p>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Price:</strong> {price}</p>
            <button onClick={() => onDelete(isbn)}>Delete</button>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        isbn: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Book;
