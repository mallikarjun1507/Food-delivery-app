const Food = require('../models/foodModel');

exports.getFoods = async (req, res) => {
  try {
    console.log("gjhdasdgasdgjsagdj")
    const data = await Food.getAllFoods();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
