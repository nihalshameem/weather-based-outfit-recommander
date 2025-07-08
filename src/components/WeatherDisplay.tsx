import React from "react";

interface WeatherApiResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

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
    <div className="p-4 border rounded-md bg-white dark:bg-gray-800 shadow-sm max-w-md mx-auto mt-5">
      <h2 className="text-lg font-semibold mb-2">🌦 Weather in {data.name}</h2>

      <p>🌡 Temperature: {temperature}°C</p>
      <p>🌤 Condition: {weather[0]?.description}</p>
      <p>💨 Wind Speed: {windSpeed} m/s</p>
      <p>💧 Humidity: {humidity}%</p>

      <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 rounded text-sm">
        👕 <strong>Outfit Suggestion:</strong> {getOutfitRecommendation()}
      </div>
    </div>
  );
};

export default WeatherDisplay;
