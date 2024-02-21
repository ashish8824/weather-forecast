import React from "react";
import { iconUrlFromCode } from "../utils/constants";
import { degreeToDirection, kelvinToCelsius } from "../utils/helpers";

const HourlyCard = ({ details }) => {
  const { time, icon, temp, wind_speed, wind_deg } = details;
  return (
    <div className="font-bold bg-gradient-to-b from-orange-400 to-orange-200 flex flex-col gap-8 rounded-2xl py-8 justify-center items-center mt-8 mb-8 min-w-40">
      <h1 className="">{time}</h1>
      <img alt="img" src={iconUrlFromCode(icon)} />
      <p>{kelvinToCelsius(temp).toFixed()}&deg;C</p>
      <p className="text-center">{degreeToDirection(wind_deg)}</p>
      <p>{wind_speed.toFixed(1)}km/h</p>
    </div>
  );
};

export default HourlyCard;
