import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  .salmon-btn {
    color: #fff;
    font-weight: bold;
    background: #ec7648;
    text-shadow: -1px 1px 2px #2e2622;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: -1px 1px 3px black;
    text-decoration: none;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #430074, black);
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
