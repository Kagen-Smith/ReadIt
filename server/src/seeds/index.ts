import { seedUser } from './user-seeds.js'; // Import the user seeding function
import { seedReview } from './review-seeds.js'; // Import the review seeding function
import { seedBook } from './book-seeds.js'; // Import the book seeding function
import { sequelize } from '../models/index.js'; // Import the Sequelize instance

// Function to seed the database with initial data
const seedAll = async (): Promise<void> => {
    try {
        // Sync the database, dropping existing tables and recreating them
        await sequelize.sync({ force: true });
        console.log(`\n------ DATABASE SYNCED ------\n`);

        // Seed user data
        await seedUser();
        console.log(`\n------ USERS SEEDED ------\n`);
        
        // Seed book data
        await seedBook();
        console.log(`\n------ BOOKS SEEDED ------\n`);

        // Seed review data
        await seedReview();
        console.log(`\n------ REVIEWS SEEDED ------\n`);

        // Exit the process successfully
        process.exit(0);
    } catch (error) {
        // Log any errors and exit the process with failure
        console.log(error);
        process.exit(1);
    }
};

// Execute the seedAll function to start the seeding process
seedAll();