import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { UserFactory } from './user.js';
import { ReviewFactory } from './reviews.js';
import { BookFactory } from './books.js';

const sequelize = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL)
    : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
            decimalNumbers: true,
        }
    });
    const user = UserFactory(sequelize);
    const review = ReviewFactory(sequelize);
    const book = BookFactory(sequelize);

    user.hasMany(review, { foreignKey: 'assignedUserId' });
    user.hasMany(book, { foreignKey: 'assignedUserId' });
    review.belongsTo(user, { foreignKey: 'assignedUserId' });
    review.belongsTo(book, { foreignKey: 'assignedBookId' });
    book.hasMany(review, { foreignKey: 'assignedBookId' });
    book.hasMany(user, { foreignKey: 'assignedUserId' });

    export { sequelize, user, review, book };