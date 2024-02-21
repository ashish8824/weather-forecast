import CurrentWeather from "./CurrentWeather";
import DateTimeComponent from "./DateTime";

const PrimarySection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 my-8">
      <div className="w-full md:w-4/12">
        <DateTimeComponent />
      </div>
      <div className="w-full md:w-8/12">
        <CurrentWeather />
      </div>
    </div>
  );
};

export default PrimarySection;
