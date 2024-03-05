import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import BookDetailModal from './BookDetailModal';

const BookList = ({ books, handleView, handleEdit, handleDelete }) => {
    const [selectedBook, setSelectedBook] = useState(null);

    const handleViewClick = (book) => {
        setSelectedBook(book);
    };

    return (
        <div>
            <h2>Book List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.isbn}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td>
                                <Button variant="info" onClick={() => handleViewClick(book)}>View</Button>{' '}
                                <Button variant="warning" onClick={() => handleEdit(book)}>Edit</Button>{' '}
                                <Button variant="danger" onClick={() => handleDelete(book.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedBook && <BookDetailModal book={selectedBook} onHide={() => setSelectedBook(null)} />}
        </div>
    );
};

export default BookList;