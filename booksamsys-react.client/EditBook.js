import { useState } from 'react';
import axios from 'axios';

const EditBook = ({ book }) => {
    const [editedBook, setEditedBook] = useState({ ...book });

    const handleChange = (e) => {
        setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/books/${editedBook.isbn}`, editedBook);
            alert('Book updated successfully');
        } catch (error) {
            console.error('Error updating book:', error);
            alert('Error updating book');
        }
    };

    return (
        <div>
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <br></br>
                    <label>Book Name:</label>
                    <input type="text" name="bookName" value={editedBook.bookName} onChange={handleChange} />
                </div>
                <div>
                    <label>Author Name:</label>
                    <input type="text" name="authorName" value={editedBook.authorName} onChange={handleChange} />
                </div>
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default EditBook;