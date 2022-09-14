import React, { useEffect, useState } from "react";
import "../dist/css/countrydetails.css";
import LoadingSpinner from "./LoadingSpinner";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  let languages;
  let borderCountries;

  let urltype = "name";

  const getCountryDetail = async () => {
    if (countryName.length <= 3) urltype = "alpha";
    const response = await axios.get(
      `https://restcountries.com/v2/${urltype}/${countryName}`
    );
    if (response.status === 200) return response.data;
  };

  useEffect(() => {
    getCountryDetail()
      .then((data) => {
        Array.isArray(data) ? setCountry(data[0]) : setCountry([data][0]);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(true);
        console.log(err.message);
      });
  }, [countryName]);

  if (country) {
    languages = (
      <span>
        {country.languages
          ?.map((language) => {
            return language.name;
          })
          .join(", ")}
      </span>
    );

    borderCountries = country.borders?.map((country) => {
      return (
        <Link
          key={country}
          to={`/country/${country}`}
          className="detailPageBtn"
        >
          {country}
        </Link>
      );
    });
  }

  const spinner = !isLoaded ? <LoadingSpinner /> : "";

  return (
    <>
      {spinner}
      {country && isLoaded && (
        <div className="contryDetail">
          <Link to="/" className="detailPageBtn">
            <i className="fa-solid fa-arrow-left"></i> Back
          </Link>

          <div className="country">
            <div className="flagWrapper">
              <img src={country.flag} alt={`${country.name} flag`} />
            </div>

            <div className="countryInfo">
              <h2>{country.name}</h2>
              <div className="descCountry">
                <div>
                  <p>
                    Native Name : <span>{country.nativeName}</span>
                  </p>
                  <p>
                    Popultation : <span>{country.population}</span>
                  </p>
                  <p>
                    Region : <span>{country.region}</span>
                  </p>
                  <p>
                    Sub Region : <span>{country.subregion}</span>
                  </p>
                  <p>
                    Capital : <span>{country.capital}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Top Level Domain : <span>{country.topLevelDomain[0]}</span>
                  </p>

                  <p>
                    Currencies : <span>{country.currencies[0].name}</span>
                  </p>
                  <p>Languages : {languages}</p>
                </div>
              </div>

              <div className="borderCountries">
                <span>Border Countries: </span>
                <div className="countriesList">
                  {borderCountries ? borderCountries : "none"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDetail;
