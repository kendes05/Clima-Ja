import React from "react";
import WeatherCardFooterItem from "./WeatherCardFooterItem";
import { Cloud } from "lucide-react";
import { Droplets } from "lucide-react";
import { Wind } from "lucide-react";
import { Gauge } from "lucide-react";

const WeatherCard = ({ show }) => {
  return (
    <div
      className={`flex flex-col items-center
      rounded-2xl h-90 w-114 mt-5 shadow-2xl bg-white
      transform transition-all duration-500 ease-in-out dark:bg-slate-950 border-white dark:shadow-[0_0_10px_grey]
      ${
        show
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }
    `}
    >
      <div className="pt-8 flex flex-col items-center gap-4">
        <p className="font-bold text-2xl dark:text-white">Fortaleza</p>
        <p className="flex items-center gap-1.5 text-5xl font-bold text-center dark:text-white">
          <Cloud className="text-blue-500 size-8" /> 25°C
        </p>
        <p className="text-gray-500">Sensação térmica: 26°C</p>
        <p className="text-lg dark:text-white">Céu limpo</p>
      </div>

      <div className="flex justify-around mt-10 w-full">
        <WeatherCardFooterItem
          icon={Droplets}
          label={"Umidade"}
          value={"60%"}
        />
        <WeatherCardFooterItem icon={Wind} label={"Vento"} value={"12 km/h"} />
        <WeatherCardFooterItem
          icon={Gauge}
          label={"Pressão"}
          value={"1012 hPa"}
        />
      </div>
    </div>
  );
};

export default WeatherCard;
