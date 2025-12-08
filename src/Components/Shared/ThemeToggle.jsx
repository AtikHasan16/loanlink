import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs"; // Theme toggle

const ThemeToggle = () => {
  // Initialize theme from localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme to document on mount and when theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Handle theme toggle
  const handleThemeChange = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div>
      <div className="">
        <label className="toggle toggle-xl text-primary">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={handleThemeChange}
            className="theme-controller"
          />
          <BsSun size={24}></BsSun>
          <BsMoon size={24}></BsMoon>
        </label>
      </div>
    </div>
  );
};

export default ThemeToggle;
