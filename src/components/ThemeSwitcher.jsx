import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const getUserTheme = () => {
    const theme = localStorage.getItem("theme") || "light";
    return theme;
  };
  const [theme, setTheme] = useState(getUserTheme());

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const switchTheme = (themePref) => {
    localStorage.setItem("theme", themePref);
    setTheme(themePref);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      return switchTheme("dark");
    }
    switchTheme("light");
  };

  return (
    <button className="toggleBtn" onClick={toggleTheme}>
      <i className="fa-regular fa-sun"></i>
      Dark Mode
    </button>
  );
};

export default ThemeSwitcher;
