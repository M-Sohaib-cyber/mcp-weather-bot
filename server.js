require('dotenv').config();

const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;


const API_KEY = process.env.API_KEY;

app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;

  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );

    res.json({
      location: response.data.location.name,
      temperature: response.data.current.temp_c,
      condition: response.data.current.condition.text
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
