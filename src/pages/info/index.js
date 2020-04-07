import React from "react";
import { Link } from "react-router-dom";

import { InfoContainer } from "./styles";

const Info = () => {
  return (
    <InfoContainer>
      <p>info</p>
      <Link to="/">return</Link>
    </InfoContainer>
  );
};

export default Info;
