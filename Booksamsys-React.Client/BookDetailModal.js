import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const BookDetailModal = ({ book, onHide }) => {
    return (
        <Modal show={true} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Book Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>ISBN:</strong> {book.isbn}</p>
                <p><strong>Name:</strong> {book.name}</p>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Price:</strong> {book.price}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BookDetailModal;
