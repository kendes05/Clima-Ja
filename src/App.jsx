import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";
import ToggleItem from "./components/ToggleItem";

const App = () => {
  const [showCard, setShowCard] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSearch = () => {
    setShowCard(!showCard);
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="w-full h-screen flex items-center flex-col transition-all duration-300 ease-in-out dark:bg-slate-950">
      <ToggleItem isDark={isDark} onToggle={toggleTheme} />
      <h1 className="w-full text-center text-4xl font-bold py-8 dark:text-white">
        ClimaJá
      </h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard show={showCard} />
      <Footer />
    </div>
  );
};

export default App;
