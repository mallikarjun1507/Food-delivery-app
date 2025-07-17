const db = require('../config/db');

exports.getAllFoods = async () => {
  const [rows] = await db.query('SELECT * FROM foods');
  return rows;
};
