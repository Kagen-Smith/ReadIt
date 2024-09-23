import { Book } from '../models/books.js';

export const seedBook = async () => {
    await Book.bulkCreate([
        { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' },
        { title: 'The Da Vinci Code', author: 'Dan Brown', genre: 'Mystery' },
        { title: 'the Hellbound heart', author: 'Clive Barker', genre: 'Horror' },
    ], { individualHooks: true });
}