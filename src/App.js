import { useState } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import "./dist/css/styles.css";

function App() {
  const [searchVal, setSearchVal] = useState("");
  console.log("rerender App");

  const searchChange = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <Filter searchChange={searchChange} />
      <Countries searchCountry={searchVal} />
    </div>
  );
}

export default App;
