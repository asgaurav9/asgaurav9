const express = require('express');
const winston = require('winston');
const app = express();
const port = 3001;
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
  });
  

// Utility function to validate input
function validateNumbers(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return { error: 'Invalid input. Both num1 and num2 must be numbers.' };
  }
  return null;
}
app.use((req, res, next) => {
    res.on('finish', () => {
      logger.info({
        method: req.method,
        url: req.originalUrl,
        ip: req.ip,
        status: res.statusCode,
        headers: req.headers,
      });
    });
    next();
  });
// Addition
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);

  const result = parseFloat(num1) + parseFloat(num2);
  res.json({ result });
});
app.use((req, res, next) => {
    res.on('finish', () => {
      logger.info({
        method: req.method,
        url: req.originalUrl,
        ip: req.ip,
        status: res.statusCode,
        headers: req.headers,
      });
    });
    next();
  });
// Subtraction
app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);

  const result = parseFloat(num1) - parseFloat(num2);
  res.json({ result });
});
app.use((req, res, next) => {
    res.on('finish', () => {
      logger.info({
        method: req.method,
        url: req.originalUrl,
        ip: req.ip,
        status: res.statusCode,
        headers: req.headers,
      });
    });
    next();
  });
// Multiplication
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);

  const result = parseFloat(num1) * parseFloat(num2);
  res.json({ result });
});
app.use((req, res, next) => {
    res.on('finish', () => {
      logger.info({
        method: req.method,
        url: req.originalUrl,
        ip: req.ip,
        status: res.statusCode,
        headers: req.headers,
      });
    });
    next();
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
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const error = validateNumbers(num1, num2);
    if (error) {
      logger.error(error.error);
      return res.status(400).json(error);
    }
  
    const result = parseFloat(num1) + parseFloat(num2);
    logger.info(`Addition: ${num1} + ${num2} = ${result}`);
    res.json({ result });
  });

  app.get('/power', (req, res) => {
    const { base, exponent } = req.query;
  
    if (isNaN(base) || isNaN(exponent)) {
      return res.status(400).json({ error: 'Invalid input. Both base and exponent must be numbers.' });
    }
  
    const result = Math.pow(parseFloat(base), parseFloat(exponent));
    res.json({ result });
  });
  
  app.get('/sqrt', (req, res) => {
    const { number } = req.query;
  
    if (isNaN(number)) {
      return res.status(400).json({ error: 'Invalid input. The value must be a number.' });
    }
  
    const num = parseFloat(number);
    if (num < 0) {
      return res.status(400).json({ error: 'Square root of negative numbers is not allowed.' });
    }
  
    const result = Math.sqrt(num);
    res.json({ result });
  });
  
  app.get('/modulo', (req, res) => {
    const { num1, num2 } = req.query;
  
    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).json({ error: 'Invalid input. Both num1 and num2 must be numbers.' });
    }
  
    if (parseFloat(num2) === 0) {
      return res.status(400).json({ error: 'Modulo by zero is not allowed.' });
    }
  
    const result = parseFloat(num1) % parseFloat(num2);
    res.json({ result });
  });
  
app.get('/', (req, res) => {
    res.send('Welcome to the Calculator Microservice. Use /add, /subtract, /multiply, /divide, /power, /sqrt or /modulo.');
  });

// Start the server
app.listen(port, () => {
  console.log(`Calculator microservice running at http://localhost:${port}`);
});
