import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

import { capitalize } from "../../utils";

export const Homeworld = ({ details }) => {
  const { name, climate, population } = details;
  return (
    <div className="info">
      <FaGlobeAmericas className="icon" />
      <div className="content">
        <p>
          <strong>Name: </strong>
          {name}
        </p>
        <p>
          <strong>Climate: </strong>
          {climate ? capitalize(climate) : null}
        </p>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
      </div>
    </div>
  );
};
