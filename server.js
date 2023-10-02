// app.js
const cors = require('cors'); // Import the cors middleware
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
// const mongoose = require('./connection'); // Import the database connection
const Product = require('./product'); // Import the Mongoose model
const User = require('./Users'); // Import the
// const { default: Register } = require('./src/pages/Register');
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

// Define a Register
app.post('/api/register', async (req, res) => {
  try {
    // Extract user registration data from the request body
    const { firstname, lastname, email, password } = req.body;

    // Hash the user's password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = new User({ firstname, lastname, email, password: hashedPassword });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Define a route to handle user login
app.post('/api/login', async (req, res) => {
  try {
    // Extract user login data from the request body
    const { email, password } = req.body;

    // Find the user by email in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If the email and password are valid, send the user's email as a response
    res.json({ email: user.email });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start your Express server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


