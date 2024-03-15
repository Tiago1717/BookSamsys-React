import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import BookDetailModal from './BookDetailModal';
import book from './Book.js';


const BookList = ({ book }) => {
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
                                <Button variant="info" onClick={() => handleViewClick(book)}>View</Button>
                               
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
