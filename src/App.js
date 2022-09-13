import logo from "./logo.svg";
import Home from "./components/Home";
import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./dist/css/styles.css";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<CountryDetail />} />
          {/* <Route path="Countries-list/details/:name" element = {<Coun/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
