const express = require('express');
const app = express();
const port = 80;

// Simple route to confirm the server is running
app.get('/', (req, res) => {
  res.send('Hello, Node.js application is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
