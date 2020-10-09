import * as dotenv from 'dotenv';
dotenv.config();
export const config = {
    host: process.env.NODEMAILER_HOST,
    port: parseInt(process.env.NODEMAILER_PORT as string),
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
    }
} 