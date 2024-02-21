import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { formatToLocalTime } from "../utils/constants";

const DateTimeComponent = () => {
  const weatherData = useSelector((store) => store.weatherAPi.weatherData);
  if (weatherData === null) return;

  const { name, dt, timezone, temp_min, temp_max, country } = weatherData;

  return (
    <div className="  text-lg bg-[#d9d9d9] h-full rounded-2xl shadow-xl shadow-black">
      <div className="flex items-center justify-center flex-col h-full">
        <h3 className="font-bold ">
          {name}, {country}
        </h3>
        <h1 className="font-bold text-6xl mt-3">
          {formatToLocalTime(dt, timezone, "hh:mm a ")}
        </h1>
        <p className="mt-3">
          {formatToLocalTime(dt, timezone, "cccc, dd LLL ")}
        </p>
        <div className="flex mt-3 gap-6">
          <div>
            <FontAwesomeIcon icon={faArrowUp} /> {temp_max}&deg;C
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowDown} /> {temp_min}&deg;C
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimeComponent;
