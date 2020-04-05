import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const AppContainer = styled.div`
  width: 100vw;
  background: linear-gradient(to bottom, #430074, black);
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    display: flex;
    align-items: center;

    .logo {
      width: 300px;
      padding: 25px;
    }

    .gif {
      width: 150px;
      /* border-radius: 5px; */
      transform: rotate(15deg);
    }
  }

  .main-wrapper {
    width: 70vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
