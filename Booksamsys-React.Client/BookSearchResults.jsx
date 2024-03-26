import { Table } from 'react-bootstrap';

const BookSearchResults = ({ Books }) => {
    return (
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
                {Books((book) => (
                    <tr key={book.id}>
                        <td>{book.isbn}</td>
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default BookSearchResults;
