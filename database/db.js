import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // You should set this in environment variables
    database: 'cipher_quest',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool; 