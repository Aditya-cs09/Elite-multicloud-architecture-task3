
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// /api route
app.get('/api', (req, res) => {
  res.json({ message: "Hello from GCP!" });
});

// PORT must be process.env.PORT
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});








