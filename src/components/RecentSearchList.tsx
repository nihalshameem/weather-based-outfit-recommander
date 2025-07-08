import React from "react";
import { CityInterface } from "../utils/commonTypes";

interface Props {
  items: CityInterface[];
  onSelect: (city: CityInterface) => void;
}

const RecentSearchList: React.FC<Props> = ({ items, onSelect }) => {
  if (items.length === 0) return null;

  return (
    <div className="mt-2 border rounded-md p-3 bg-gray-50 dark:bg-gray-800 shadow">
      <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
        Recent Searches
      </h3>
      <ul className="space-y-1">
        {items.map((city, index) => (
          <li
            key={`${city.name}-${index}`}
            className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1 rounded text-sm text-gray-800 dark:text-white"
            onClick={() => onSelect(city)}
          >
            {city.name}, {city.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearchList;
