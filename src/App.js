import logo from "./logo.svg";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import "./dist/css/styles.css";

function App() {
  console.log("rerender App");
  return (
    <div className="App">
      <Header />
      <Filter />
      <Countries />
    </div>
  );
}

export default App;
