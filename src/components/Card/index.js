import React from "react";
import { FaGlobeAmericas, FaJedi, FaArrowsAltV } from "react-icons/fa";
import { CardContainer, InfoContainer } from "./styles";

const Card = ({
  image,
  alt,
  name,
  gender,
  height,
  mass,
  click,
  homeworldBtn,
  starshipBtn,
  homeworldName,
  homeworldClimate,
  homeworldPopulation
}) => {
  return (
    <CardContainer>
      <img src={image} alt={alt} />
      <h1>{name}</h1>
      <InfoContainer>
        <p className="attribute">{`Gender: `}</p>
        <span>{`${gender} |`}</span>
        <p className="attribute">{`Height: `}</p>
        <span>{`${height} |`}</span>
        <p className="attribute">{`Mass: `}</p>
        <span>{`${mass}`}</span>
      </InfoContainer>
      <div className="icons">
        <button
          onClick={() => click("homeworld")}
          className={`homeworld clicky ${homeworldBtn}`}
        >
          <span>
            <FaGlobeAmericas className="icon" />
            Homeworld
          </span>
        </button>
        <button
          onClick={() => click("starships")}
          className={`starships clicky ${starshipBtn}`}
        >
          <span>
            <FaJedi className="icon" />
            Starships
          </span>
        </button>
      </div>
      <div className="info-container">
        {homeworldBtn ? (
          <div className="info">
            <FaGlobeAmericas className="icon" />
            <div className="content">
              <p>
                <strong>Name: </strong>
                {homeworldName}
              </p>
              <p>
                <strong>Climate: </strong>
                {homeworldClimate}
              </p>
              <p>
                <strong>Population: </strong>
                {homeworldPopulation}
              </p>
            </div>
          </div>
        ) : (
          <div className="info">
            <FaJedi className="icon" />
            <div className="content">
              <p>
                <strong>Name: </strong>X-wing
              </p>
              <p>
                <strong>Cost: </strong>149999
              </p>
              <p>
                <strong>Class: </strong>Starfighter
              </p>
              <p>
                <strong>Length: </strong>12.5
              </p>
            </div>
            <FaArrowsAltV className="icon-arrow" />
          </div>
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
