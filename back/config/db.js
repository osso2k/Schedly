import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config()

export const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

export const connectDB = async () => {
    try {
        await pool.query(`SELECT 1;`)
        console.log("DB Connected!")
    } catch (error) {
        console.log("Err in connectDB", error.message)
    }

}
