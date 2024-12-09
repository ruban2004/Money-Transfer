const express = require('express');
const cors = require('cors');
const app = express();

// Middleware to parse JSON body
app.use(express.json());
app.use(cors());

// Define a port
const port = 4040;

// Define a GET endpoint
app.get('/api/test', (req, res) => {
  res.json({ body: 'test ok5' });
});

// Define a POST endpoint
app.post('/api/transaction', (req, res) => {
  res.json(req.body); // Echo back the JSON sent in the request
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
