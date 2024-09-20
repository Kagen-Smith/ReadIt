import { seedUser } from './user-seeds.js';
import { seedReview } from './review-seeds.js';
import { seedBook } from './book-seeds.js';
import { sequelize } from '../models/index.js';

const seedAll = async (): Promise<void> => {
    try {
        await sequelize.sync({ force: true });
        console.log(`\n------ DATABASE SYNCED ------\n`);

        await seedUser();
        console.log(`\n------ USERS SEEDED ------\n`);

        await seedReview();
        console.log(`\n------ REVIEWS SEEDED ------\n`);    

        await seedBook();
        console.log(`\n------ BOOKS SEEDED ------\n`);
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

seedAll();