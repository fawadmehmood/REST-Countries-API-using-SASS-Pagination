import React, { useEffect, useState } from "react";
import axios from "axios";
import "../dist/css/countries.css";
import Card from "./Card";

const Countries = () => {
  const [countriesList, setCountries] = useState();
  let renderCountries;

  const getCountries = async () => {
    const response = await axios.get(
      "https://restcountries.com/v2/all?fields=name,capital,region,population,flags"
    );

    if (response.status === 200) return response.data;
  };

  useEffect(() => {
    getCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (countriesList) {
    renderCountries = countriesList.map((country) => {
      let { name, population, region, capital } = country;
      return (
        <Card
          key={name}
          imgSrc={country.flags.svg}
          name={name}
          population={population}
          region={region}
          capital={capital}
        />
      );
    });
  }

  return (
    <>
      {countriesList && (
        <div className="countriesContainer">{renderCountries}</div>
      )}
    </>
  );
};

export default Countries;
