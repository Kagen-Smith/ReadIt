import { Review } from '../models/reviews.js'; // Import the Review model

// Function to seed the database with initial review data
export const seedReview = async () => {
    // Use bulkCreate to insert multiple review records at once
    await Review.bulkCreate([
        { id: 1, title: 'Great Book', content: 'I really enjoyed this book', rating: 5, assignedUserId: 1, assignedBookId: 1 }, // Positive review
        { id: 2, title: 'Not my favorite', content: 'I did not enjoy this book', rating: 2, assignedUserId: 2, assignedBookId: 2 }, // Negative review
        { id: 3, title: 'Amazing', content: 'This book was amazing', rating: 5, assignedUserId: 3, assignedBookId: 3 }, // Another positive review
        { id: 4, title: 'Good Read', content: 'I would recommend this book', rating: 4, assignedUserId: 4, assignedBookId: 4 }, // Positive review with a recommendation
        { id: 5, title: 'Disappointing', content: 'I was disappointed by this book', rating: 2, assignedUserId: 5, assignedBookId: 5 }, // Negative review
    ], { individualHooks: true }); // Use individual hooks for each record (if necessary for validations or hooks)
}