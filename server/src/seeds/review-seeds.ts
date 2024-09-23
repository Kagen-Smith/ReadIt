import { Review } from '../models/reviews.js';

export const seedReview = async () => {
    await Review.bulkCreate([
        { id: 1, title: 'Great Book', content: 'I really enjoyed this book', rating: 5, assignedUserId: 1, assignedBookId: 1 },
        { id: 2, title: 'Not my favorite', content: 'I did not enjoy this book', rating: 2, assignedUserId: 2, assignedBookId: 2 },
        { id: 3, title: 'Amazing', content: 'This book was amazing', rating: 5, assignedUserId: 3, assignedBookId: 3 },
        { id: 4, title: 'Good Read', content: 'I would recommend this book', rating: 4, assignedUserId: 4, assignedBookId: 4 },
        { id: 5, title: 'Disappointing', content: 'I was disappointed by this book', rating: 2, assignedUserId: 5, assignedBookId: 5 },
    ], { individualHooks: true });
}