import logo from "./logo.svg";
import Header from "./components/Header";
import "./dist/css/styles.css";

function App() {
  console.log("rerender App");
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
