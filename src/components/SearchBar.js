import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SearchBar = ({ setQuery }) => {
  const [city, setCity] = useState("");

  const handleSearchCity = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <div className="w-10/12">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-black w-11/12  py-2 px-8 rounded-l-full focus:outline-none capitalize placeholder:lowercase"
          type="text"
          placeholder="search for a city ...."
        />
        <button
          className="w-1/12 border border-black py-2 px-4 rounded-r-full bg-white"
          onClick={handleSearchCity}
        >
          <FontAwesomeIcon className="h-5" icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
