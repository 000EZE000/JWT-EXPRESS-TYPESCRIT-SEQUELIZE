import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv'
import { User } from '../models/User';

dotenv.config();
console.log(process.env.DB_HOST,
    process.env.DB_USER,
    process.env.DB_PASS,
    process.env.DB_NAME,);

const connection = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: false,
    models: [User]
})

export default connection;