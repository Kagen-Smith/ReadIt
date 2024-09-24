import { Book } from '../models/books.js'; // Import the Book model

// Function to seed the database with initial book data
export const seedBook = async () => {
    // Use bulkCreate to insert multiple book records at once
    await Book.bulkCreate([
        { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' }, // Fantasy book
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' }, // Fiction book
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' }, // Another fiction classic
        { title: 'The Da Vinci Code', author: 'Dan Brown', genre: 'Mystery' }, // Mystery novel
        { title: 'The Hellbound Heart', author: 'Clive Barker', genre: 'Horror' }, // Horror book
    ], { individualHooks: true }); // Use individual hooks for each record (if necessary for validations or hooks)
}