import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";

const SearchBar = ({ setQuery }) => {
  const [city, setCity] = useState("");

  const toggle = useSelector((store) => store.toggle.isDark);

  const handleSearchCity = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <div className="w-full md:w-10/12">
      <form onSubmit={(e) => e.preventDefault()} className="flex">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={
            toggle
              ? "border border-black w-full md:w-11/12 py-2 px-8 rounded-l-full focus:outline-none capitalize placeholder:lowercase text-black"
              : "border border-black w-full md:w-11/12 py-2 px-8 rounded-l-full focus:outline-none capitalize placeholder:lowercase"
          }
          type="text"
          placeholder="Search for a city ...."
        />
        <button
          className={
            toggle
              ? "w-1/12 md:w-auto border border-black py-2 px-4 rounded-r-full bg-white text-black"
              : "w-1/12 md:w-auto border border-black py-2 px-4 rounded-r-full bg-white"
          }
          onClick={handleSearchCity}
        >
          <FontAwesomeIcon className="h-5" icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
