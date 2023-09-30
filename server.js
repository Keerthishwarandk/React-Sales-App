// app.js
const cors = require('cors'); // Import the cors middleware
const express = require('express');
const app = express();
// const mongoose = require('./connection'); // Import the database connection
const Product = require('./product'); // Import the Mongoose model

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
// Define a route to insert a product
app.post('/api/products', async (req, res) => {
  try {
    // Create a new product document based on the request body
    const { product_id, product_name, quantity, amount } = req.body;
    const newProduct = new Product({ product_id, product_name, quantity, amount });

    // Save the new product to the database
    await newProduct.save();

    // Send a success response
    res.status(201).json({ message: 'Product inserted successfully' });
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



// Define a route to fetch sales data
app.get('/api/sales', async (req, res) => {
  try {
    // Retrieve all sales data from the database
    const salesData = await Product.find();
    res.json(salesData);
  } catch (error) {
    console.error('Error fetching sales data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
// Start your Express server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


