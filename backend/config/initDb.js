const mysql = require('mysql2');
require('dotenv').config();

const initDb = () => {
  return new Promise((resolve, reject) => {
    // Step 1: Connect without selecting DB to create it
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

    connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``, (err) => {
      if (err) {
        connection.end();
        return reject(err);
      }

      console.log(`✅ Database '${process.env.DB_NAME}' is ready.`);

      // Step 2: Connect to the newly created DB
      const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });

      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS foods (
          id INT NOT NULL AUTO_INCREMENT,
          name VARCHAR(100) DEFAULT NULL,
          price DECIMAL(10,2) DEFAULT NULL,
          image VARCHAR(255) DEFAULT NULL,
          PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
      `;

      const insertDataQuery = `
        INSERT INTO foods (id, name, price, image) VALUES
          (1, 'Pizza', 250.00, '/images/pizza.jpg'),
          (2, 'Burger', 150.00, '/images/burger.jpg'),
          (3, 'Pasta', 200.00, '/images/pasta.jpg')
        ON DUPLICATE KEY UPDATE
          name = VALUES(name),
          price = VALUES(price),
          image = VALUES(image);
      `;

      // Step 3: Create Table
      db.query(createTableQuery, (err) => {
        if (err) {
          db.end();
          return reject(err);
        }
        console.log('✅ Table `foods` created or already exists.');

        // Step 4: Insert Sample Data
        db.query(insertDataQuery, (err) => {
          db.end();
          if (err) return reject(err);
          console.log('✅ Sample food data inserted.');
          resolve();
        });
      });
    });
  });
};

module.exports = initDb;
