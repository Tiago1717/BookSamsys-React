import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const BookDetailModal = ({ book, onHide }) => {
    const { ISBN, BookName, AuthorName, Price } = book;

    return (
        <Modal show={true} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Book Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>ISBN:</strong> {ISBN}</p>
                <p><strong>Name:</strong> {BookName}</p>
                <p><strong>Author:</strong> {AuthorName}</p>
                <p><strong>Price:</strong> {Price}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

BookDetailModal.propTypes = {
    book: PropTypes.shape({
        ISBN: PropTypes.string.isRequired,
        BookName: PropTypes.string.isRequired,
        AuthorName: PropTypes.string.isRequired,
        Price: PropTypes.number.isRequired
    }),
    onHide: PropTypes.func.isRequired
};

BookDetailModal.defaultProps = {
    book: {
        ISBN: '',
        BookName: '',
        AuthorName: '',
        Price: 0
    }
};

export default BookDetailModal;
