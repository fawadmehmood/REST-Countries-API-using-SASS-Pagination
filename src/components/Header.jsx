import React, { useState, useEffect } from "react";
import "../dist/css/header.css";

const Header = () => {
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
