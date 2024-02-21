import { DateTime } from "luxon";

export const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: process.env.REACT_APP_API_KEY,
  });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    name,
    dt,
    sys: { country },
    weather,
    wind: { speed, deg },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    name,
    country,
    speed,
    deg,
    details,
    icon,
    dt,
  };
};

const filterForecastByDay = (forecastData) => {
  const filteredData = {};

  forecastData.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!filteredData[date]) {
      filteredData[date] = [];
    }

    filteredData[date].push(item);
  });

  return Object.values(filteredData);
};

const formatHourlyForecastWeather = (data) => {
  const { list, city } = data;
  const { coord, sunrise, sunset } = city;
  const { timezone } = coord;

  const sunriseTime = formatToLocalTime(sunrise, timezone, "hh:mm a");
  const sunsetTtime = formatToLocalTime(sunset, timezone, "hh:mm a");

  const daily = filterForecastByDay(list)
    .slice(1, 6)
    .map((item) => {
      return {
        time: formatToLocalTime(item[0].dt, timezone, "cccc"),
        icon: item[0].weather[0].icon,
        temp: item[0].main?.temp,
      };
    });

  const hourly = list.slice(0, 8).map((item, id) => {
    return {
      time: formatToLocalTime(item.dt, timezone, "hh:mm a"),
      icon: item?.weather[0].icon,
      temp: item?.main?.temp,
      wind_speed: item?.wind?.speed,
      wind_deg: item?.wind?.deg,
    };
  });
  return { daily, hourly, sunriseTime, sunsetTtime, timezone };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;
  const formattedHourlyForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
  }).then(formatHourlyForecastWeather);

  return { ...formattedCurrentWeather, ...formattedHourlyForecastWeather };
};

export const formatToLocalTime = (
  secs,
  zone,
  format = "cccc,dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export const iconUrlFromCode = (code) =>
  `https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
