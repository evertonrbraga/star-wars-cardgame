import React, { useState } from "react";
import { FaGlobeAmericas, FaJedi } from "react-icons/fa";

import { CardContainer, InfoContainer } from "./styles";
import { Homeworld } from "../Homeworld";
import { Starships } from "../Starships";
import { capitalize } from "../../utils";

const Card = ({ image, character }) => {
  const { name, gender, height, mass, homeworld, starships } = character;

  const [homeworldBtn, setHomeworldBtn] = useState("clicked");
  const [starshipsBtn, setStarshipsBtn] = useState("");

  const handleClick = (name, setHomeworldBtn, setStarshipsBtn) => {
    return name === "homeworld"
      ? (setHomeworldBtn("clicked"), setStarshipsBtn(""))
      : (setHomeworldBtn(""), setStarshipsBtn("clicked"));
  };

  return (
    <CardContainer>
      <img src={require(`../../assets/characters/${image}`)} alt={name} />
      <h1>{name}</h1>
      <InfoContainer>
        <p className="attribute">{`Gender: `}</p>
        <span>{`${gender !== "n/a" ? capitalize(gender) : gender} |`}</span>
        <p className="attribute">{`Height: `}</p>
        <span>{`${height} |`}</span>
        <p className="attribute">{`Mass: `}</p>
        <span>{`${mass}`}</span>
      </InfoContainer>

      <div className="icons">
        <button
          onClick={() =>
            handleClick("homeworld", setHomeworldBtn, setStarshipsBtn)
          }
          className={`homeworld clicky ${homeworldBtn}`}
        >
          <span>
            <FaGlobeAmericas className="icon" />
            Homeworld
          </span>
        </button>
        <button
          onClick={() =>
            handleClick("starships", setHomeworldBtn, setStarshipsBtn)
          }
          className={`starships clicky ${starshipsBtn}`}
        >
          <span>
            <FaJedi className="icon" />
            Starships
          </span>
        </button>
      </div>

      <div className="info-container">
        {homeworldBtn ? (
          <Homeworld details={homeworld} />
        ) : (
          <Starships name={name} details={starships} />
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
