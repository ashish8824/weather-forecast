import React from "react";
import UilSunrise from "@iconscout/react-unicons/icons/uil-sun";
import UilSunset from "@iconscout/react-unicons/icons/uil-sunset";
import { useSelector } from "react-redux";
import { iconUrlFromCode } from "../utils/constants";

const CurrentWeather = () => {
  const weatherData = useSelector((store) => store.weatherAPi.weatherData);
  if (weatherData === null) return;
  const {
    feels_like,
    details,
    pressure,
    speed,
    humidity,
    icon,
    temp,
    sunsetTtime,
    sunriseTime,
  } = weatherData;

  return (
    <div className="flex items-center justify-center  text-lg bg-[#d9d9d9] h-full rounded-2xl shadow-xl shadow-black">
      <div className="first  w-4/12 h-full  px-6 py-2 ml-8">
        <div>
          <h1 className=" font-bold text-6xl">{temp.toFixed()}&deg;C</h1>
          <p>
            Feels like:{" "}
            <span className="font-bold">{feels_like.toFixed()}&deg;C</span>
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <UilSunrise size="50" />
          <div className="flex flex-col gap-0">
            <h1 className="font-bold text-xl">Sunrise</h1>
            <p className="">{sunriseTime}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <UilSunset size="50" />
          <div className="flex flex-col gap-0">
            <h1 className="font-bold text-xl">Sunset</h1>
            <p className="">{sunsetTtime}</p>
          </div>
        </div>
      </div>
      <div className="second w-4/12 flex flex-col gap-4 h-full items-center justify-center">
        <img alt="sun -img" src={iconUrlFromCode(icon)} className="w-40" />
        <h1 className="font-bold text-2xl">{details}</h1>
      </div>
      <div className="third w-4/12 h-full flex flex-col gap-4 ">
        <div className="first-row flex gap-8 mx-12 mt-4">
          <div className="flex flex-col items-center ">
            <img
              alt="img"
              src={require("../assets/humidity.png")}
              className="w-10"
            />
            <p className="font-bold">{humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="flex flex-col items-center ">
            <img
              alt="img"
              src={require("../assets/windy.png")}
              className="w-10"
            />
            <p className="font-bold">{speed.toFixed()}km/hr</p>
            <p>Speed</p>
          </div>
        </div>
        <div className="second-row flex mx-12 gap-16">
          <div className="flex flex-col items-center ">
            <img
              alt="img"
              src={require("../assets/gauge.png")}
              className="w-10"
            />
            <p className="font-bold">{pressure}hPa</p>
            <p>Pressure</p>
          </div>
          <div className="flex flex-col items-center ">
            <img alt="img" src={require("../assets/uv.png")} className="w-10" />
            <p className="font-bold">8</p>
            <p>UV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
