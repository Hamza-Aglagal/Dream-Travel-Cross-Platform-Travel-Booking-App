const mysql = require('mysql');

const dbConfig = {
    connectionLimit: 10,
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "",
    database: "dreamtravel"
};

const pool = mysql.createPool(dbConfig);

const connectToDatabase = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                return reject(err);
            }
            console.log('Database connected successfully!');
            resolve(connection);
        });
    });
};



module.exports = { connectToDatabase, pool };
