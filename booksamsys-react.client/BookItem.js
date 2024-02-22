import from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book }) => (
    <>
        <strong>{book.bookName}</strong> by {book.authorName}
    </>
);

BookItem.propTypes = {
    book: PropTypes.shape({
        bookName: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired
    }).isRequired
};

export default BookItem;
