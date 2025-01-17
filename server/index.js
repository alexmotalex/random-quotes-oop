const express = require('express');
const quotes = require('./data/quotes');
const app = express();
const cors = require('cors');
const PORT = 3000;
const corsOption = {
  origin: '*', // default cross origin value for CORS

  // origin: ['http://localhost:8080', 'http://127/0/0/:8080'],
};

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

app.use(cors(corsOption));

app.get('/quotes/random-quote', (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API service is running on port ${PORT}`);
});
