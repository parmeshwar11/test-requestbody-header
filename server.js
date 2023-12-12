const express = require('express');
const app = express();
const port = 4318;

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.url}`);
  console.log('Request Headers:', req.headers);
  next();
});

// Your other route handling code goes here

// Start the server
app.listen(port, () => {
  console.log(`Node.js server is listening on port ${port}`);
});
