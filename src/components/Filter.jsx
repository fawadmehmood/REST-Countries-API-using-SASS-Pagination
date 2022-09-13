import React from "react";
import "../dist/css/filter.css";

const Filter = () => {
  return (
    <div className="filter">
      <div className="inputWrapper">
        <input type="search" placeholder="Search for a country..." />
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
      <label for="regions"></label>
      <select name="regions">
        <option selected disabled>
          Filter by region
        </option>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
