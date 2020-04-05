import React from "react";
import { FaJedi, FaArrowsAltV } from "react-icons/fa";

import { StarshipsContainer, InfoContainer } from "./styles";
import { capitalize } from "../../utils";

export const Starships = ({ name, details }) => {
  return details ? (
    <StarshipsContainer className="info">
      <FaJedi className="icon" />
      <InfoContainer className="content">
        {details.map((detail, i) => (
          <div className="texts" key={i}>
            <p>
              <strong>Name: </strong>
              {detail.name}
            </p>
            <p>
              <strong>Cost: </strong>
              {capitalize(detail.cost_in_credits)}
            </p>
            <p>
              <strong>Class: </strong>
              {capitalize(detail.starship_class)}
            </p>
            <p>
              <strong>Length: </strong>
              {detail.length}
            </p>
          </div>
        ))}
      </InfoContainer>
      {details.length > 1 ? (
        <FaArrowsAltV className="icon-arrow" />
      ) : details.length === 0 ? (
        <div className="content starship-warning">
          <p className="name">{name}</p>
          <p>does not have any starship!</p>
        </div>
      ) : null}
    </StarshipsContainer>
  ) : null;
};
