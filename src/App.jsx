import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";
import ToggleItem from "./components/ToggleItem";

const App = () => {
  const [city, setCity] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [recents, setRecents] = useState([]);

  const addRecentSearch = (cityName) => {
    setRecents((prevRecents) => {
      const newRecents = [...prevRecents, cityName];
      if (newRecents.length > 4) {
        newRecents.shift(); // remove o primeiro elemento
      }
      return newRecents;
    });
  };

  const handleSearch = (cityName) => {
    setCity(cityName);
    addRecentSearch(cityName);
  };

  const handleSearchRecentItem = (cityName) => {
    setCity(cityName);
  };

  const clearRecents = () => {
    setRecents([]);
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme === "true") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="w-full min-h-screen flex items-center flex-col transition-all duration-300 ease-in-out dark:bg-slate-950">
      <ToggleItem isDark={isDark} onToggle={toggleTheme} />
      <h1 className="w-full text-center text-4xl font-bold py-8 dark:text-white">
        ClimaJá
      </h1>
      <SearchBar onSearch={handleSearch} />
      {city && <WeatherCard city={city} />}
      <Footer
        recentsArray={recents}
        onSearch={handleSearchRecentItem}
        clearRecents={clearRecents}
      />
    </div>
  );
};

export default App;
