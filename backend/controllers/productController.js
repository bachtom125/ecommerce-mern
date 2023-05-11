const Product = require("../models/productModel");

const getAllProducts = async () => {
  try {
    const products = Product.find();
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { getAllProducts };
