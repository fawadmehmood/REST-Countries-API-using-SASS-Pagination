import React, { useState } from "react";
import Filter from "./Filter";
import Countries from "./Countries";

const Home = () => {
  const [searchVal, setSearchVal] = useState("");
  const [region, setRegion] = useState("");
  console.log("rerender App");

  const searchChange = (e) => {
    setSearchVal(e.target.value);
  };

  const filterRegion = (e) => {
    setRegion(e.target.value);
  };

  return (
    <div className="App">
      <Filter searchChange={searchChange} selectRegion={filterRegion} />
      <Countries searchedCountry={searchVal} region={region} />
    </div>
  );
};

export default Home;
