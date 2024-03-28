/* eslint-disable no-empty */
import axios from 'axios';
import { useForm, useMutation } from 'react-hook-form';

const AddBookForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { mutateAsync, isLoading, isError, error } = useMutation(book => axios.post('http://localhost:5000/api/books', book));

    const onSubmit = async (data) => {
        try {
            await mutateAsync(data);
            alert('Book added successfully!');
            reset();
        } catch (error) {
        }
    };

    return (
        <div>
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Book Name:</label>
                    <input type="text" name="bookName" {...register('bookName', { required: true })} />
                    {errors.bookName && <span>This field is required</span>}
                </div>
                <div>
                    <label>Author Name:</label>
                    <input type="text" name="authorName" {...register('authorName', { required: true })} />
                    {errors.authorName && <span>This field is required</span>}
                </div>
                <div>
                    <label>ISBN:</label>
                    <input type="text" name="isbn" {...register('isbn', { required: true })} />
                    {errors.isbn && <span>This field is required</span>}
                </div>
                <button type="submit" disabled={isLoading}>Add Book</button>
            </form>
            {isError && <p>Error adding book: {error.message}</p>}
        </div>
    );
};

export default AddBookForm;
