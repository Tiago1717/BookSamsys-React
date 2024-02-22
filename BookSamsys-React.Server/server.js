const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookController = require('./controllers/bookController');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/api/books', bookController.getAllBooks);
app.post('/api/books', bookController.addBook);
app.put('/api/books/:isbn', bookController.updateBook);
app.delete('/api/books/:isbn', bookController.deleteBook);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
