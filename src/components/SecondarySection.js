import React from "react";
import FiveDaysForecast from "./FiveDaysForecast";
import HourlyForecast from "./HourlyForecast";

const SecondarySection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 my-8">
      <div className="md:w-3/12">
        <FiveDaysForecast />
      </div>
      <div className="md:w-9/12">
        <HourlyForecast />
      </div>
    </div>
  );
};

export default SecondarySection;
