const express = require('express');
const app = express();
const port = 3001;

// Utility function to validate input
function validateNumbers(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return { error: 'Invalid input. Both num1 and num2 must be numbers.' };
  }
  return null;
}

// Addition
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);

  const result = parseFloat(num1) + parseFloat(num2);
  res.json({ result });
});

// Subtraction
app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);

  const result = parseFloat(num1) - parseFloat(num2);
  res.json({ result });
});

// Multiplication
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);

  const result = parseFloat(num1) * parseFloat(num2);
  res.json({ result });
});

// Division
app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);

  if (parseFloat(num2) === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed.' });
  }

  const result = parseFloat(num1) / parseFloat(num2);
  res.json({ result });
});

app.get('/', (req, res) => {
    res.send('Welcome to the Calculator Microservice. Use /add, /subtract, /multiply, or /divide.');
  });

// Start the server
app.listen(port, () => {
  console.log(`Calculator microservice running at http://localhost:${port}`);
});
