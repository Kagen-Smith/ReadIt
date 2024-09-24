// Import the User model
import { User } from '../models/user.js';

// Define an asynchronous function to seed user data into the database
export const seedUser = async () => {
    // Use bulkCreate to insert multiple user records into the database
    await User.bulkCreate([
        // Array of user objects to be created
        {username: 'JSutherland', email:'iGotALetter@gmail.com', password: 'password'}, // User 1
        {username: 'RRomanovich', email:'iDidntDoIt@gmail.com', password: 'password'}, // User 2
        {username: 'Link', email:'heroOfTime@gmail.com', password: 'password'}, // User 3
        {username: 'LKennedy', email:'bestRookie98@gmail.com', password: 'password'}, // User 4
        {username: 'JShepard', email:'bingusbongus@yahoo.com', password: 'password'}, // User 5
    ], { individualHooks: true }); // Use individualHooks to apply hooks for each record
};
