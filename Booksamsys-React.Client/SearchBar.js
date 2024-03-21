import React from 'react';
import { Table } from 'react-bootstrap';

const BookSearchResults = ({ books }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ISBN</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book.isbn}>
                        <td>{book.isbn}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default BookSearchResults;
