const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all routes

app.get('/api/horoscope/:sign', async (req, res) => {
  const { sign } = req.params;
  try {
    const response = await axios.get(`https://ohmanda.com/api/horoscope/${sign}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching horoscope data');
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
