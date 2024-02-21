import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { formatToLocalTime } from "../utils/constants";
import { useSelector } from "react-redux";

const DateTimeComponent = () => {
  const weatherData = useSelector((store) => store.weatherAPi.weatherData);
  const toggle = useSelector((store) => store.toggle.isDark);

  if (weatherData === null) return null;

  const { name, dt, timezone, temp_min, temp_max, country } = weatherData;

  return (
    <div
      className={
        toggle
          ? "text-lg bg-gray-800 h-full rounded-2xl shadow-xl shadow-black"
          : "text-lg bg-[#d9d9d9] h-full rounded-2xl shadow-xl shadow-black"
      }
    >
      <div className="flex items-center justify-center flex-col h-full p-6">
        <h3 className="font-bold text-center mb-2">
          {name}, {country}
        </h3>
        <h1 className="font-bold text-4xl md:text-6xl mt-2">
          {formatToLocalTime(dt, timezone, "hh:mm a")}
        </h1>
        <p className="mt-2 text-center">
          {formatToLocalTime(dt, timezone, "cccc, dd LLL ")}
        </p>
        <div className="flex mt-3 gap-4 md:gap-6">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faArrowUp} className="mr-2" />
            <span className="font-semibold">{temp_max}&deg;C</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
            <span className="font-semibold">{temp_min}&deg;C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimeComponent;
