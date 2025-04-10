const express = require('express');
const app = express();

// Route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello Kubernetes!');
});

// Ensure the app listens on the correct port and accepts connections
app.listen(3040, '0.0.0.0', () => {
  console.log('Server is running on port 3040');
});
