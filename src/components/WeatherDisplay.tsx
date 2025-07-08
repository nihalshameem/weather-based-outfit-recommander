import React from "react";
import { WeatherApiResponse } from "../utils/commonTypes";
import { motion } from "framer-motion";

interface WeatherDisplayProps {
  data: WeatherApiResponse;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  const { main, weather, wind } = data;
  const condition = weather[0]?.main.toLowerCase();
  const temperature = (main.temp - 273.15).toFixed(1); // Kelvin to Celsius
  const humidity = main.humidity;
  const windSpeed = wind.speed;

  const getOutfitRecommendation = () => {
    const tempC = main.temp - 273.15;

    if (condition.includes("rain")) return "☔ Take an umbrella";
    if (condition.includes("snow")) return "🧤 Wear boots and a warm coat";
    if (tempC < 10) return "🧥 Wear a jacket";
    if (tempC > 30) return "🩳 Wear light clothes and stay hydrated";
    if (condition.includes("clear")) return "😎 Sunglasses recommended";

    return "👕 Dress comfortably";
  };

  return (
    <motion.div
      className="p-4 border rounded-md bg-white dark:bg-gray-800 shadow-sm max-w-md mx-auto mt-5 dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold mb-2">🌦 Weather in {data.name}</h2>

      <p>🌡 Temperature: {temperature}°C</p>
      <p>🌤 Condition: {weather[0]?.description}</p>
      <p>💨 Wind Speed: {windSpeed} m/s</p>
      <p>💧 Humidity: {humidity}%</p>

      <motion.div
        className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 rounded text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        👕 <strong>Outfit Suggestion:</strong> {getOutfitRecommendation()}
      </motion.div>
    </motion.div>
  );
};

export default WeatherDisplay;
