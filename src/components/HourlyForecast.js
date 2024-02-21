import React from "react";
import HourlyCard from "./HourlyCard";
import { useSelector } from "react-redux";

const HourlyForecast = () => {
  const weatherData = useSelector((store) => store.weatherAPi.weatherData);
  const toggle = useSelector((store) => store.toggle.isDark);
  if (weatherData === null) return;
  const { hourly: threeHourIntervals } = weatherData;

  return (
    <div
      className={
        toggle
          ? "flex items-center justify-center flex-col text-lg bg-gray-800  rounded-2xl shadow-xl shadow-black pb-4"
          : "flex items-center justify-center flex-col text-lg bg-[#d9d9d9]  rounded-2xl shadow-xl shadow-black pb-4"
      }
    >
      <h1 className="font-bold mt-4">hour forecast:</h1>
      <div className="flex gap-8 overflow-x-scroll w-full px-6 ">
        {threeHourIntervals.map((hourlyData, id) => (
          <HourlyCard details={hourlyData} key={id} />
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
