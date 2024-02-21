import React from "react";
import FiveDaysForecast from "./FiveDaysForecast";
import HourlyForecast from "./HourlyForecast";

const SecondarySection = () => {
  return (
    <div className="flex gap-8 my-8 h-60">
      <div className=" h-full w-3/12">
        <FiveDaysForecast />
      </div>
      <div className="  w-9/12">
        <HourlyForecast />
      </div>
    </div>
  );
};

export default SecondarySection;
