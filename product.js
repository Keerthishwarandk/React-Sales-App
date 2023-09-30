// models/Product.js

const mongoose = require('./connection');

const productSchema = new mongoose.Schema({
  product_id: String,
  product_name: String,
  quantity: Number,
  amount: Number,
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;
