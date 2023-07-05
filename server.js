const mysql = require('mysql');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate username and password
  if (username === 'admin' && password === 'password') {
    // Credentials are valid, create session or generate JWT here

    // Redirect to home page
    res.redirect('/home');
  } else {
    // Invalid credentials, handle error
    res.status(401).send('Invalid username or password');
  }
});

// Other routes
app.get('/home', (req, res) => {
  // Handle home page rendering
  res.send('Welcome to the home page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
