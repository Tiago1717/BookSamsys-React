import React from 'react';
import axios from 'axios';

const DeleteBook = ({ isbn, refreshBooks }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/books/${isbn}`);
            alert('Book deleted successfully');
            refreshBooks(); 
        } catch (error) {
            console.error('Error deleting book:', error);
            alert('Error deleting book');
        }
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete Book</button>
        </div>
    );
};

export default DeleteBook;