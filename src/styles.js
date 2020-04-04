import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const AppContainer = styled.div`
  width: 100vw;
`;
