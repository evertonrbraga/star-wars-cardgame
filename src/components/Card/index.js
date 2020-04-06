import React, { useState, useEffect } from "react";
import { FaGlobeAmericas, FaJedi } from "react-icons/fa";

import { CardContainer, InfoContainer } from "./styles";
import { Homeworld } from "../Homeworld";
import { Starships } from "../Starships";
import { capitalize } from "../../utils";

const Card = ({ image, character, page }) => {
  const { name, gender, height, mass, homeworld, starships } = character;

  const [homeworldBtn, setHomeworldBtn] = useState("clicked");
  const [starshipsBtn, setStarshipsBtn] = useState("");

  useEffect(() => {
    setHomeworldBtn("clicked");
    setStarshipsBtn("");
  }, [page]);

  const handleClick = (name, setHomeworldBtn, setStarshipsBtn) => {
    return name === "homeworld"
      ? (setHomeworldBtn("clicked"), setStarshipsBtn(""))
      : (setHomeworldBtn(""), setStarshipsBtn("clicked"));
  };

  const fixName = (name) => {
    switch (name) {
      case "Jabba Desilijic Tiure":
        return "Jabba the Hutt";
        break;
      case "Wicket Systri Warrick":
        return "Wicket Warrick";
        break;
      case "hermaphrodite":
        return "n/a".toLowerCase();
        break;
      default:
        return name;
    }
  };

  return (
    <CardContainer>
      <img src={require(`../../assets/characters/${image}`)} alt={name} />
      <h1>{fixName(name)}</h1>
      <InfoContainer>
        <p className="attribute">{`Gender: `}</p>
        <span>{gender !== "n/a" ? capitalize(fixName(gender)) : gender}</span>
        <p className="attribute">{`Height: `}</p>
        <span>{`${height} |`}</span>
        <p className="attribute">{`Mass: `}</p>
        <span>{`${mass === "unknown" ? "n/a" : mass}`}</span>
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
