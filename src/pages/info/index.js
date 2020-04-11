import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../theme-context";
import { InfoContainer } from "./styles";

const Info = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <InfoContainer>
      <h1>SWAPI</h1>
      <p>The Star Wars API</p>
      <p>All the Star Wars data you've ever wanted!</p>
      <p>Now with The Force Awakens data!</p>
      <a href="https://swapi.co/">Visit us</a>
      <Link
        to="/"
        onClick={() => setTheme("green")}
        style={{ background: theme }}
      >
        RETURN
      </Link>
    </InfoContainer>
  );
};

export default Info;
