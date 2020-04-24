import React, { useState, useEffect, useContext } from "react";
import { FaGlobeAmericas, FaJedi } from "react-icons/fa";

import { Homeworld } from "../Homeworld";
import { Starships } from "../Starships";
import { capitalize, fix } from "../../utils";
import { CardContainer, InfoContainer } from "./styles";
import { ThemeContext } from "../../theme-context";

const Card = ({ character, page }) => {
  const {
    image,
    name,
    gender,
    height,
    mass,
    homeworld,
    starships,
    description
  } = character;

  const [homeworldBtn, setHomeworldBtn] = useState("clicked");
  const [starshipsBtn, setStarshipsBtn] = useState("");

  // const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    setHomeworldBtn("clicked");
    setStarshipsBtn("");
  }, [page]);

  const handleClick = (name, setHomeworldBtn, setStarshipsBtn) => {
    return name === "homeworld"
      ? (setHomeworldBtn("clicked"), setStarshipsBtn(""))
      : (setHomeworldBtn(""), setStarshipsBtn("clicked"));
  };

  return (
    <CardContainer>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <InfoContainer>
        <p className="attribute">{`Gender: `}</p>
        <span>{`${gender} | `}</span>
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
          <Homeworld homeworld={homeworld} />
        ) : (
          <Starships name={name} details={starships} />
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
