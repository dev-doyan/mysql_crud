import mysql from 'mysql2/promise'
import dotenv from 'dotenv';
dotenv.config();


const pool=mysql.createPool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

const check_connection= async()=>{
    try {
        const connection= await pool.getConnection();
        console.log("database connected");
        connection.release()

    } catch (error) {
        console.log(error)
    }
}

export  {pool,check_connection}