import React, { useState, useEffect } from "react";
import "../dist/css/header.css";

const Header = () => {
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
    <header>
      <div className="headerWrapper container">
        <h1>Where in the world ?</h1>
        <button className="toggleBtn" onClick={toggleTheme}>
          <i className="fa-regular fa-sun"></i>
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
