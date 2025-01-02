import mysql from "mysql2";

/* 
  Create a connection with a MySQL server with the configurations listed in .env file
  The library used here is mysql2 which is a more advanced node.js library with more 
  features than mysql
  The connection is exported and used in "like.js" routes file
*/
const dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default dbConnection;
