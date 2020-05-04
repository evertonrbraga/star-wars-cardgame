import React, { useState, useEffect, useContext } from "react";
import { FaGlobeAmericas, FaJedi } from "react-icons/fa";

import { BottomInfo } from "../BottomInfo";
import { PageContext } from "../../page-context";
import { CardContainer, InfoContainer } from "./styles";

const Card = ({ character }) => {
  const {
    image,
    name,
    gender,
    height,
    mass,
    homeworld,
    description,
  } = character;

  const [homeworldBtn, setHomeworldBtn] = useState("clicked");
  const [historyBtn, setHistoryBtn] = useState("");
  const [page] = useContext(PageContext);

  useEffect(() => {
    setHomeworldBtn("clicked");
    setHistoryBtn("");
  }, [page]);

  const handleClick = (name, setHomeworldBtn, setHistoryBtn) => {
    return name === "homeworld"
      ? (setHomeworldBtn("clicked"), setHistoryBtn(""))
      : (setHomeworldBtn(""), setHistoryBtn("clicked"));
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
            handleClick("homeworld", setHomeworldBtn, setHistoryBtn)
          }
          className={`homeworld clicky ${homeworldBtn}`}
        >
          <span className="btn-homeworld">
            <FaGlobeAmericas className="icon" />
            Homeworld
          </span>
        </button>

        <button
          onClick={() => handleClick("history", setHomeworldBtn, setHistoryBtn)}
          className={`history clicky ${historyBtn}`}
        >
          <span className="btn-history">
            <FaJedi className="icon" />
            History
          </span>
        </button>
      </div>
      <div className="info-container">
        {homeworldBtn ? (
          <BottomInfo content={homeworld} />
        ) : (
          <BottomInfo history content={description} />
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
