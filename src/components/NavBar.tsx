import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const NavBar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow px-4 py-3 flex items-center justify-between mb-20">
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        WeatherFit
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
