import React from "react";
import "../dist/css/countries.css";

const Card = ({ imgSrc, name, population, region, capital }) => {
  console.log("card Rerenderd");
  return (
    <div className="card">
      <div className="countryImgWrapper">
        <img src={imgSrc} alt={`${name} flag`} />
      </div>
      <div className="cardBody">
        <span className="title">{name}</span>
        <p>
          Population : <span>{population}</span>
        </p>
        <p>
          Region : <span>{region}</span>
        </p>
        <p>
          Capital : <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default React.memo(Card);
