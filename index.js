const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// API endpoint to call
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
// Auther Munesh Lohana
// created: 26.01.2024
app.get('/', async (req, res) => {
  try {
    // Make API request using axios
    const response = await axios.get(apiUrl);

    // Send JSON response
    res.json({
      data: response.data,
      headers: response.headers,
    });
  } catch (error) {
    // Handle errors
    console.error('Error:', error.message);

    // If available, send the status code and headers of the error response
    if (error.response) {
      res.status(error.response.status).json({
        error: {
          status: error.response.status,
          headers: error.response.headers,
        },
      });
    } else {
      // Send a generic error response
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
