import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

import { Container } from "./styles";
export const Homeworld = ({ homeworld }) => {
  return (
    <Container className="info">
      <FaGlobeAmericas className="icon" />
      <div className="content">
        <p>{homeworld}</p>
      </div>
    </Container>
  );
};
