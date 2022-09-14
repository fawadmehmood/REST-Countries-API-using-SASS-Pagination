import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "../dist/css/countries.css";
import Card from "./Card";
import Pagination from "./Pagination";

const Countries = ({ searchedCountry, region }) => {
  console.log("rerender Countries Component");

  const [countriesList, setCountries] = useState();

  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);

  const [pageInput, setPageInput] = useState(1);

  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(12);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page

  let renderCountries;
  let currentRecords;
  let nPages;

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
    const filtredByRegion = countriesList.filter((country) =>
      country.region.includes(region)
    );

    const filtredByName = filtredByRegion.filter((country) =>
      country.name.toLowerCase().includes(searchedCountry.toLowerCase())
    );
    currentRecords = filtredByName.slice(indexOfFirstRecord, indexOfLastRecord);
    nPages = Math.ceil(filtredByName.length / recordsPerPage);

    renderCountries = currentRecords.map((country) => {
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

  const nextPage = useCallback(() => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
      setPageInput(currentPage + 1);
    }
  }, [currentPage]);

  const prevPage = useCallback(() => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setPageInput(currentPage - 1);
    }
  }, [currentPage]);

  const handlePageInput = useCallback(
    (e) => {
      const val = e.target.value;
      if (parseInt(val) > nPages || parseInt(val) <= 0) {
        setPageInput(nPages);
        return;
      }
      setPageInput(val);
    },
    [pageInput]
  );

  const handleEnterKey = useCallback(
    (e) => {
      if (e.key === "Enter" || e.keyCode === 13) {
        if (e.target.value.length !== 0) {
          setCurrentPage(pageInput);
        }
      }
    },
    [pageInput]
  );

  return (
    <>
      {countriesList && (
        <div className="countriesContainer">{renderCountries}</div>
      )}
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        nPages={nPages}
        currentPage={currentPage}
        handleEnterKey={handleEnterKey}
        handlePageInput={handlePageInput}
        pageInput={pageInput}
      />
    </>
  );
};

export default React.memo(Countries);
