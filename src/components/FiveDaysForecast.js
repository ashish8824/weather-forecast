import React from "react";
import { useSelector } from "react-redux";
import { iconUrlFromCode } from "../utils/constants";
import { kelvinToCelsius } from "../utils/helpers";

const FiveDaysForecast = () => {
  const weatherData = useSelector((store) => store.weatherAPi.weatherData);
  const toggle = useSelector((store) => store.toggle.isDark);
  if (weatherData === null) return;
  const { daily } = weatherData;

  return (
    <div
      className={
        toggle
          ? "flex items-center justify-center flex-col text-lg bg-gray-800  rounded-2xl shadow-xl shadow-black"
          : "flex items-center justify-center flex-col text-lg bg-[#d9d9d9]  rounded-2xl shadow-xl shadow-black"
      }
    >
      <h1 className="font-bold mt-4">Five Days Forecast</h1>
      <ul>
        {daily.map((day, ind) => (
          <li key={ind} className="flex items-center justify-around gap-10">
            <img alt="img" src={iconUrlFromCode(day.icon)} />
            <p>{kelvinToCelsius(day.temp).toFixed()}&deg;C</p>
            <p>{day.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiveDaysForecast;
