import dotenv from 'dotenv'; // Import dotenv to manage environment variables
dotenv.config(); // Load environment variables from .env file

import { Sequelize } from 'sequelize'; // Import Sequelize for database interaction
import { UserFactory } from './user.js'; // Import User model factory
import { ReviewFactory } from './reviews.js'; // Import Review model factory
import { BookFactory } from './books.js'; // Import Book model factory

// Initialize Sequelize instance based on environment variables
const sequelize = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL) // Use DB_URL if provided
    : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
        host: 'localhost', // Set host to localhost
        dialect: 'postgres', // Use PostgreSQL as the database dialect
        dialectOptions: {
            decimalNumbers: true, // Enable decimal number handling
        }
    });

// Initialize models
const user = UserFactory(sequelize); // Create User model instance
const review = ReviewFactory(sequelize); // Create Review model instance
const book = BookFactory(sequelize); // Create Book model instance

// Define relationships between models
user.hasMany(review, { foreignKey: 'assignedUserId' }); // One-to-many relationship: User to Review
user.hasMany(book, { foreignKey: 'assignedUserId' }); // One-to-many relationship: User to Book
review.belongsTo(user, { foreignKey: 'assignedUserId' }); // Many-to-one relationship: Review to User
review.belongsTo(book, { foreignKey: 'assignedBookId' }); // Many-to-one relationship: Review to Book
book.hasMany(review, { foreignKey: 'assignedBookId' }); // One-to-many relationship: Book to Review
book.hasMany(user, { foreignKey: 'assignedUserId' }); // One-to-many relationship: Book to User (may need clarification)

// Export sequelize instance and model instances for use in other modules
export { sequelize, user, review, book };