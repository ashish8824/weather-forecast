import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import ToggleButton from "./ToggleButton";
import getFormattedWeatherData from "../utils/constants";
import { addAPIData } from "../redux/slices/apiCallSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  const [query, setQuery] = useState({ q: "new delhi" });

  const dispatch = useDispatch();

  const toggle = useSelector((store) => store.toggle.isDark);
  const units = "metric";

  useEffect(() => {
    const weatherData = async () => {
      const message = query.q ? query.q : "current location";

      toast.info("fetching weather for " + message);
      const data = await getFormattedWeatherData({ ...query, units });
      // toast.success("successfully fetched weather for " + message);
      dispatch(addAPIData(data));
    };

    weatherData();
  }, [query]);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
      <div className="w-full md:w-2/12">
        <ToggleButton />
      </div>
      <div className="w-full md:w-8/12">
        <SearchBar setQuery={setQuery} />
      </div>
      <button
        className={
          toggle
            ? "w-full md:w-2/12 bg-green-500 font-bold rounded-full py-2 text-white"
            : "w-full md:w-2/12 bg-slate-400 text-black font-bold rounded-full py-2"
        }
        onClick={handleLocationClick}
      >
        <FontAwesomeIcon icon={faLocation} className="mr-2" />
        Current Location
      </button>
    </div>
  );
};

export default Header;
