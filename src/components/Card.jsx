import React from "react";
import "../dist/css/countries.css";
import { Link } from "react-router-dom";

const Card = ({ imgSrc, name, population, region, capital }) => {
  return (
    <Link to={`/country/${name.replace(/\s/g, "%20")}`} className="card">
      <div>
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
    </Link>
  );
};

export default React.memo(Card);
