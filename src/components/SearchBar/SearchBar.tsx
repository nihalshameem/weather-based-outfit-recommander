import "./SearchBar.css";
import React, { useState } from "react";

const mockOptions = [
    "New York",
    "London",
    "Paris",
    "Tokyo",
    "Sydney",
    "Berlin",
    "Toronto",
    "San Francisco",
    "Mumbai",
    "Cape Town",
];

interface SearchBarProps {
    onSelect?: (option: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelect }) => {
    const [query, setQuery] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState<string[]>(mockOptions);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        setFilteredOptions(
            mockOptions.filter((option) =>
                option.toLowerCase().includes(value.toLowerCase())
            )
        );
        setShowOptions(true);
    };

    const handleOptionSelect = (option: string) => {
        setQuery(option);
        setShowOptions(false);
        if (onSelect) onSelect(option);
    };

    return (
        <div className="relative w-full max-w-md mx-auto search-input-div">
            <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-white bg-white text-black"
                placeholder="Search city..."
                value={query}
                onChange={handleInputChange}
                onFocus={() => setShowOptions(true)}
                onBlur={() => setTimeout(() => setShowOptions(false), 100)}
            />
            {showOptions && filteredOptions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow mt-1 max-h-48 overflow-y-auto">
                    {filteredOptions.map((option) => (
                        <li
                            key={option}
                            className="px-4 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 text-left dark:text-white text-black"
                            onMouseDown={() => handleOptionSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
