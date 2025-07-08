import React, { useCallback, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import { CityInterface, WeatherApiResponse } from "./utils/commonTypes";
import axios from "axios";
import { openWeatherEnvKey, weatherEnvUri } from "./utils/envVariables";
import WeatherDisplay from "./components/WeatherDisplay";
import RecentSearchList from "./components/RecentSearchList";
import { addRecentSearch } from "./store/slices/citySearchSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const [weatherData, setWeatherData] = useState<WeatherApiResponse>();

  const handleSelect = useCallback(
    async (option: CityInterface | undefined) => {
      if (!option) {
        setWeatherData(undefined);
        return;
      }
      await axios
        .get(
          `${weatherEnvUri}?lat=${option.latitude}&lon=${option.longitude}&appid=${openWeatherEnvKey}`
        )
        .then((res) => {
          res.data && setWeatherData(res.data);
          dispatch(addRecentSearch(option));
        })
        .catch((error) => {
          console.error("API call failed:", error);
        });
    },
    []
  );

  return (
    <>
      <NavBar />
      <div className="App  items-center min-h-screen px-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="search-input-div"
        >
          <SearchBar onSelect={handleSelect} />
        </motion.div>
        <RecentSearchList onSelect={handleSelect} />
        {weatherData && <WeatherDisplay data={weatherData} />}
      </div>
    </>
  );
}

export default App;
