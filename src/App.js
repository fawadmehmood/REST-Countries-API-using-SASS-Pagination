import { useState } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import "./dist/css/styles.css";

function App() {
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
      <Header />
      <Filter searchChange={searchChange} selectRegion={filterRegion} />
      <Countries searchedCountry={searchVal} region={region} />
    </div>
  );
}

export default App;
