import "./SearchBar.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { citiesEnvUri } from "../../utils/envVariables";
import { CityInterface } from "../../utils/commonTypes";
import { LoaderCircle, X } from "lucide-react";
import debounce from "lodash/debounce";

interface SearchBarProps {
  onSelect: (option: CityInterface | undefined) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<CityInterface[]>([]);

  const fetchCities = debounce((value: string) => {
    if (!value) {
      setFilteredOptions([]);
      return;
    }
    setLoading(true);
    axios
      .get(citiesEnvUri, {
        params: { name: value },
        responseType: "json",
      })
      .then((response) => {
        setFilteredOptions(response.data?.results || []);
      })
      .catch((error) => {
        console.error("API call failed:", error);
      })
      .finally(() => setLoading(false));
  }, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setShowOptions(true);
    fetchCities(value);
  };

  const handleOptionSelect = (option: CityInterface) => {
    setPlaceholder(`${option.name}, ${option.admin1}, ${option.country}`);
    setQuery("");
    onSelect && onSelect(option);
    setShowOptions(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto search-input-div">
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-white bg-white text-black pr-10"
        placeholder={`${!placeholder ? "Search city..." : placeholder}`}
        value={query}
        onChange={handleInputChange}
        onFocus={() => setShowOptions(true)}
        onBlur={() => setTimeout(() => setShowOptions(false), 100)}
      />
      {/* Loading spinner */}
      {loading && (
        <span className="absolute right-2 top-1/2 -translate-y-1/2">
          <LoaderCircle className="animate-spin text-gray-400 dark:text-gray-600" />
        </span>
      )}
      {/* Clear button */}
      {placeholder && (
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white focus:outline-none"
          onClick={() => {
            setQuery("");
            setFilteredOptions([]);
            setShowOptions(false);
            setPlaceholder("");
            onSelect && onSelect(undefined);
          }}
          tabIndex={-1}
        >
          <X />
        </button>
      )}
      {showOptions && filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow mt-1 max-h-48 overflow-y-auto">
          {filteredOptions.map((option) => (
            <li
              key={option.id}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 text-left dark:text-white text-black"
              onMouseDown={() => handleOptionSelect(option)}
            >
              {option.name}, {option.admin1}, {option.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
