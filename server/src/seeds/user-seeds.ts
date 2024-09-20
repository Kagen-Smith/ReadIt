import { User } from '../models/user';

export const seedUser = async () => {
    await User.bulkCreate([
    {username: 'JSutherland', email:'iGotALetter@gmail.com', password: 'password'},
    {username: 'RRomanovich', email:'iDidntDoIt@gmail.com', password: 'password'},
    {username: 'Link', email:'heroOfTime@gmail.com', password: 'password'},
    {username: 'LKennedy', email:'bestRookie98@gmail.com', password: 'password'},
    {username: 'JShepard', email:'bingusbongus@yahoo.com', password: 'password'},
    ], { individualHooks: true });
};