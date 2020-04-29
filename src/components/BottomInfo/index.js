import React from "react";
import { FaGlobeAmericas, FaJedi } from "react-icons/fa";

import { Container } from "./styles";

export const BottomInfo = ({ content, history = false }) => {
  return (
    <Container className="info" history={history}>
      {history ? (
        <FaJedi className="icon" />
      ) : (
        <FaGlobeAmericas className="icon" />
      )}
      <div className="content">
        <p>{content}</p>
      </div>
    </Container>
  );
};
