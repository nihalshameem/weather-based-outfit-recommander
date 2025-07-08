import React from "react";
import { CityInterface } from "../utils/commonTypes";
import { useSelector } from "react-redux";
import { selectRecentSearches } from "../store/citySearchSelectors";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onSelect: (city: CityInterface) => void;
}

const RecentSearchList: React.FC<Props> = ({ onSelect }) => {
  const recentSearches = useSelector(selectRecentSearches);
  if (recentSearches.length === 0) return null;

  return (
    <motion.div
      className="mt-2 border rounded-md p-3 bg-gray-50 dark:bg-gray-800 shadow"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
        Recent Searches
      </h3>

      <ul className="space-y-1">
        <AnimatePresence initial={false}>
          {recentSearches.map((city) => (
            <motion.li
              key={`${city.name}-${city.latitude}-${city.longitude}`}
              className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1 rounded text-sm text-gray-800 dark:text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}
              onClick={() => onSelect(city)}
            >
              {city.name}, {city.country}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
};

export default RecentSearchList;
