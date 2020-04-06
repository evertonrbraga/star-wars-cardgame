import React from "react";
import { FaJedi, FaArrowsAltV } from "react-icons/fa";
import ScrollBar from "react-perfect-scrollbar";

import { StarshipsContainer, InfoContainer } from "./styles";
import { capitalize } from "../../utils";

export const Starships = ({ name, details }) => {
  return details ? (
    <StarshipsContainer className="info">
      <FaJedi className="icon" />
      <InfoContainer className="content">
        {details.map((detail, i) => (
          <div className="texts" key={i}>
            <ScrollBar>
              <p>
                <strong>Name: </strong>
                {detail.name}
              </p>
              <p>
                <strong>Cost: </strong>
                {detail.cost_in_credits
                  ? capitalize(detail.cost_in_credits)
                  : null}
              </p>
              <p>
                <strong>Class: </strong>
                {detail.starship_class
                  ? capitalize(detail.starship_class)
                  : null}
              </p>
              <p>
                <strong>Length: </strong>
                {detail.length}
              </p>
            </ScrollBar>
          </div>
        ))}
      </InfoContainer>
      {details.length > 1 ? (
        <FaArrowsAltV className="icon-arrow" />
      ) : details.length === 0 ? (
        <div className="content starship-warning">
          <p className="name">
            {name === "Jabba Desilijic Tiure" ? "Jabba the Hutt" : name}
          </p>
          <p>does not have any starship!</p>
        </div>
      ) : null}
    </StarshipsContainer>
  ) : null;
};
