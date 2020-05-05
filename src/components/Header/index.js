import React, { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/starwars-logo.svg";
import catwars from "../../assets/cat-wars.webp";
import { PageContext } from "../../page-context";
import { ContentContainer } from "./styles";

const Header = () => {
  const [, setPage] = useContext(PageContext);

  return (
    <ContentContainer>
      <div className="header">
        <Link onClick={() => setPage(1)} to="/">
          <img className="logo" src={logo} alt="Star Wars Logo" />
        </Link>
        <img className="gif" src={catwars} alt="Star Wars Logo" />
      </div>
      <Link to="/info" className="salmon-btn">
        + INFO
      </Link>
    </ContentContainer>
  );
};

export default Header;
