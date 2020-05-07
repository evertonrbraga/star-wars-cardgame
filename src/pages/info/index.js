import React from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiYoutube,
} from "react-icons/fi";

import { Container } from "./styles";

const Info = () => {
  return (
    <Container>
      <h1>Star Wars Cardgame</h1>
      <p className="description">Criado e desenvolvido por Everton Braga</p>
      <div className="info-container">
        <div className="icon-container">
          <div className="link-container">
            <FiGithub className="icon" />
            <a
              href="https://www.github.com/evertonrbraga/"
              target="_blank"
              className="social-link"
            >
              /evertonrbraga
            </a>
          </div>
          <p className="action">[siga / star / fork]</p>
        </div>
        <div className="icon-container">
          <div className="link-container">
            <FiLinkedin className="icon" />
            <a
              href="https://www.linkedin.com/in/evertonrbraga/"
              target="_blank"
              className="social-link"
            >
              /in/evertonrbraga
            </a>
          </div>
          <p className="action">[conecte / recomende skills]</p>
        </div>
        <div className="icon-container">
          <div className="link-container">
            <FiYoutube className="icon" />
            <a
              href="https://www.youtube.com/kuraweb"
              target="_blank"
              className="social-link"
            >
              Kura Web
            </a>
          </div>
          <p className="action">[inscreva-se / curta / ative o sininho]</p>
        </div>
        <div className="icon-container">
          <div className="link-container">
            <FiInstagram className="icon" />
            <a
              href="https://www.instagram.com/evertonr_braga/"
              target="_blank"
              className="social-link"
            >
              @evertonr.braga
            </a>
          </div>
          <p className="action">[siga]</p>
        </div>
        <div className="icon-container">
          <div className="link-container">
            <FiTwitter className="icon" />
            <a
              href="https://twitter.com/evertonr_braga"
              target="_blank"
              className="social-link"
            >
              @evertonr_braga
            </a>
          </div>
          <p className="action">[siga]</p>
        </div>
        <div className="icon-container">
          <div className="link-container">
            <FiFacebook className="icon" />
            <a
              href="https://www.facebook.com/kurawebtech"
              target="_blank"
              className="social-link"
            >
              /kurawebtech
            </a>
          </div>
          <p className="action">[curta]</p>
        </div>
      </div>
      <Link to="/" className="salmon-btn">
        RETURN
      </Link>
    </Container>
  );
};

export default Info;
