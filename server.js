// ================================
// 🌍 MCP Weather Bot (Pretty JSON)
// ================================

require('dotenv').config();
const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

// Load API key safely from .env
const API_KEY = process.env.API_KEY;

// Error if key is missing
if (!API_KEY) {
  console.error("❌ API key missing! Add API_KEY=yourkey in .env");
  process.exit(1);
}

// ✅ Current Weather Route
app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      return res.status(404).json({ error: "City not found" });
    }

    // Pretty JSON output
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({
      location: data.location.name,
      country: data.location.country,
      temperature: data.current.temp_c,
      condition: data.current.condition.text
    }, null, 2));

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// ✅ 3-Day Forecast Route
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

    // Pretty JSON output
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({
      location: data.location.name,
      forecast: forecast
    }, null, 2));

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch forecast data" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ MCP Weather Server running at http://localhost:${PORT}`);
});
