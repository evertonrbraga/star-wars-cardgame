import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiYoutube,
} from "react-icons/fi";

import { ThemeContext } from "../../theme-context";
import { Container } from "./styles";

const Info = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <Container>
      <h1>Star Wars Cardgame</h1>
      <p className="description">Criado e desenvolvido por Everton Braga</p>
      <div className="info-container">
        <div className="icon-container">
          <FiGithub className="icon" />
          <a href="" target="_blank" className="social-link">
            /evertonrbraga
          </a>
          <p className="action">[siga / star / fork]</p>
        </div>
        <div className="icon-container">
          <FiLinkedin className="icon" />
          <a
            href="https://www.linkedin.com/in/evertonrbraga/"
            target="_blank"
            className="social-link"
          >
            /in/evertonrbraga
          </a>
          <p className="action">[recomende skills]</p>
        </div>
        <div className="icon-container">
          <FiInstagram className="icon" />
          <a
            href="https://www.instagram.com/evertonr_braga/"
            target="_blank"
            className="social-link"
          >
            @evertonr.braga
          </a>
          <p className="action">[siga]</p>
        </div>
        <div className="icon-container">
          <FiTwitter className="icon" />
          <a
            href="https://twitter.com/evertonr_braga"
            target="_blank"
            className="social-link"
          >
            @evertonr_braga
          </a>
          <p className="action">[siga]</p>
        </div>
        <div className="icon-container">
          <FiFacebook className="icon" />
          <a
            href="https://www.facebook.com/kurawebtech"
            target="_blank"
            className="social-link"
          >
            /kurawebtech
          </a>
          <p className="action">[curta]</p>
        </div>
        <div className="icon-container">
          <FiYoutube className="icon" />
          <a
            href="https://www.youtube.com/kuraweb"
            target="_blank"
            className="social-link"
          >
            Kura Web
          </a>
          <p className="action">[inscreva-se / curta / ative o sininho]</p>
        </div>
      </div>
      <Link to="/" className="salmon-btn">
        RETURN
      </Link>
    </Container>
  );
};

export default Info;
