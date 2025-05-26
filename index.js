const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/country/:name', async (req, res) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${req.params.name}`);
    const c = response.data[0];
    res.json({
      name: c.name.common,
      capital: c.capital[0],
      population: c.population,
      region: c.region,
      flag: c.flags.png
    });
  } catch {
    res.status(404).json({ error: 'Country not found' });
  }
});

app.listen(3000, () => console.log('Running on port 3000'));

