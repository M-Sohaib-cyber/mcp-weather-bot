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


// 3-Day Forecast Route
app.get("/forecast/:city", async (req, res) => {
  const city = req.params.city;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      return res.status(404).json({ error: "City not found" });
    }

    const forecast = data.forecast.forecastday.map(day => ({
      date: day.date,
      temperature: day.day.avgtemp_c,
      condition: day.day.condition.text
    }));

    res.json({
      location: data.location.name,
      forecast: forecast
    });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch forecast data" });
  }
});
