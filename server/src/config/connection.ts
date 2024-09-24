import dotenv from 'dotenv'; // Import dotenv to load environment variables
dotenv.config(); // Load environment variables from .env file

import { sequelize } from '../models/index.js'; // Import the Sequelize instance
import { UserFactory } from '../models/user.js'; // Import the User model factory function

// Initialize User model using the Sequelize instance
const User = UserFactory(sequelize);

// Sync the database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized'); // Log success message
  })
  .catch(error => {
    console.error('Error synchronizing database:', error); // Log any errors that occur during synchronization
  });

// Export the sequelize instance and User model for use in other modules
export { sequelize, User };