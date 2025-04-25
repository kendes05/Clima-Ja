import React from "react";
import WeatherCardFooterItem from "./WeatherCardFooterItem";
import { useState, useEffect } from "react";
import { Cloud } from "lucide-react";
import { Droplets } from "lucide-react";
import { Wind } from "lucide-react";
import { Gauge } from "lucide-react";

const WeatherCard = ({ city }) => {
  const [showCard, setShowCard] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  function capitalizeWords(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "60a5356cc4568340637786bbbe824e19";
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
        );

        if (!response.ok) {
          setShowCard(true); // Lança um erro se o status não for 2xx
          throw new Error("Cidade não encontrada");
        }

        const data = await response.json();
        setWeather(data);
        setShowCard(true);
        setError(null);
      } catch (error) {
        setError(error.message);
        setWeather(null);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  useEffect(() => {
    if (weather) {
      console.log(weather);
    }
  }, [weather]);

  return (
    <div
      className={`flex flex-col items-center
      rounded-2xl h-90 w-114 mt-5 shadow-2xl bg-white
      transform transition-all duration-500 ease-in-out dark:bg-slate-950 border-white dark:shadow-[0_0_10px_grey]
      ${
        showCard
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }
    `}
    >
      <div className="pt-8 flex flex-col items-center gap-4">
        <p className="font-bold text-2xl dark:text-white">
          {error ? "Cidade não encontrada" : weather?.name}
        </p>
        <p className="flex items-center gap-1.5 text-5xl font-bold text-center dark:text-white">
          <Cloud className="text-blue-500 size-8" />
          {error
            ? "-"
            : `${weather?.main?.temp && Math.round(weather.main.temp)}°C`}
        </p>
        <p className="text-gray-500">{`Sensação térmica: ${
          error
            ? "-"
            : weather?.main?.feels_like && Math.round(weather.main.feels_like)
        }°C`}</p>
        <p className="text-lg dark:text-white">
          {error
            ? "-"
            : weather?.weather[0].description &&
              capitalizeWords(weather?.weather[0].description)}
        </p>
      </div>

      <div className="flex justify-around mt-10 w-full">
        <WeatherCardFooterItem
          icon={Droplets}
          label={"Umidade"}
          value={`${error ? "-" : weather?.main?.humidity + " %"}`}
        />
        <WeatherCardFooterItem
          icon={Wind}
          label={"Vento"}
          value={`${
            error
              ? "-"
              : weather?.wind?.speed && Math.round(weather.wind.speed) + " km/h"
          }`}
        />
        <WeatherCardFooterItem
          icon={Gauge}
          label={"Pressão"}
          value={`${error ? "-" : weather?.main?.pressure + " hPa"}`}
        />
      </div>
    </div>
  );
};

export default WeatherCard;
