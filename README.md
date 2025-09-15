# 🌦️ MCP Weather Bot

![Node.js](https://img.shields.io/badge/Node.js-22.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.18-blue?logo=express)
![WeatherAPI](https://img.shields.io/badge/API-WeatherAPI.com-lightblue)

A simple Node.js server that fetches live weather data from [WeatherAPI.com](https://www.weatherapi.com/) and returns it as JSON.  
Supports **current weather** and a **3-day forecast**. Secure API key management with `.env`.

---

## 🚀 Features
- 🌍 Get current weather for any city  
- 📅 Get 3-day weather forecast  
- 🔑 Secure API key storage via `.env`  
- 💻 Runs locally on your computer  
- 📦 Easy setup and usage  

---
## 📂 Project Structure
```
mcp-weather-bot/
│── server.js # Main server code
│── package.json # Project config & dependencies
│── .env # Holds your API key (not uploaded to GitHub)
│── .gitignore # Keeps secrets & node_modules out of Git
```


---

## ⚙️ Setup Instructions

### 0) Prerequisites
- Install **Node.js (LTS)**: [https://nodejs.org](https://nodejs.org)  
- Verify installation:
```
  node -v
  npm -v
```

1) Clone the repo
git clone https://github.com/M-Sohaib-cyber/mcp-weather-bot.git
cd mcp-weather-bot

2) Install dependencies

Option A — Explicitly install required packages:

npm install express node-fetch@2 dotenv


Option B — If package.json already lists them:

npm install


(Optional for auto-restart during development):

npm install --save-dev nodemon

3) Add your API key

Sign up at WeatherAPI
 (free).

Create a .env file in the project root and add your key:

API_KEY=your_real_api_key_here


⚠️ Important: .env is already in .gitignore, so it will not be pushed to GitHub.

4) Start the server
node server.js
# or, with nodemon:
npx nodemon server.js

5) Test in your browser

Current weather:

http://localhost:3000/weather/London


3-day forecast:

http://localhost:3000/forecast/London

📸 Example Output

Current weather

{
  "location": "London",
  "country": "United Kingdom",
  "temperature": 18,
  "condition": "Partly cloudy"
}


3-day forecast

{
  "location": "London",
  "forecast": [
    { "date": "2025-09-15", "temperature": 18, "condition": "Sunny" },
    { "date": "2025-09-16", "temperature": 20, "condition": "Cloudy" },
    { "date": "2025-09-17", "temperature": 17, "condition": "Rain" }
  ]
}

🔒 Security Notes

Never commit your .env file (your API key).

Your GitHub repo already has .gitignore with .env, so you’re safe.

Anyone using this project must generate their own API key.

👨‍💻 Author

Built by Mohammad Sohaib 👋
📌 BSc (Hons) Networks and Cyber Security student | Passionate about ethical hacking & forensics
