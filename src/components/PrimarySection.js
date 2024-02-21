import CurrentWeather from "./CurrentWeather";
import DateTimeComponent from "./DateTime";

const PrimarySection = () => {
  return (
    <div className="flex gap-8 my-8 h-60">
      <div className="  w-4/12">
        <DateTimeComponent />
      </div>
      <div className="  w-8/12">
        <CurrentWeather />
      </div>
    </div>
  );
};

export default PrimarySection;
