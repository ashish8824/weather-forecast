import React from "react";
import { useSelector } from "react-redux";
import { iconUrlFromCode } from "../utils/constants";
import { kelvinToCelsius } from "../utils/helpers";

const FiveDaysForecast = () => {
  const weatherData = useSelector((store) => store.weatherAPi.weatherData);
  const toggle = useSelector((store) => store.toggle.isDark);
  if (weatherData === null) return null; // Return null if weatherData is null
  const { daily } = weatherData;

  return (
    <div
      className={
        toggle
          ? "flex flex-col text-lg bg-gray-800 rounded-2xl shadow-xl shadow-black p-4"
          : "flex flex-col text-lg bg-[#d9d9d9] rounded-2xl shadow-xl shadow-black p-4"
      }
    >
      <h1 className="font-bold mt-4 text-center">Five Days Forecast</h1>
      <div className="grid grid-cols-1 gap-8 mt-4">
        {daily.map((day, ind) => (
          <div
            key={ind}
            className="flex flex-row items-center justify-around p-2 gap-2 rounded-md shadow-md"
          >
            <img
              alt="img"
              src={iconUrlFromCode(day.icon)}
              className="w-12 h-12"
            />
            <p className="font-bold text-center">
              {kelvinToCelsius(day.temp).toFixed()}&deg;C
            </p>
            <p className="text-center">{day.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveDaysForecast;
