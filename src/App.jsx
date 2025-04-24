import React from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [showCard, setShowCard] = useState(false);

  const handleSearch = () => {
    setShowCard(!showCard);
  };

  return (
    <div className="w-full h-dvh flex items-center flex-col">
      <h1 className="w-full text-center text-4xl font-bold py-8">ClimaJá</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard show={showCard} />
    </div>
  );
};

export default App;
