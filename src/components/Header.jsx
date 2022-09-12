import React, { useState, useEffect } from "react";
import "../dist/css/header.css";

import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header>
      <div className="headerWrapper container">
        <h1>Where in the world ?</h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
