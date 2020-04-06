import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const AppContainer = styled.div`
  width: 100vw;
  height: ${(props) => (props.apiData ? "auto" : "100vh")};
  background: linear-gradient(to bottom, #430074, black);
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  footer {
    width: 100vw;
    background: #290049;
    display: ${(props) => (props.apiData ? "flex" : "none")};
    justify-content: center;
    position: fixed;
    bottom: 0;

    .button-container {
      width: 70vw;
      display: flex;
      justify-content: space-between;

      button {
        padding: 7px 10px;
        color: #fff;
        border-radius: 5px;
        border: none;
        background: #5c00a3;
        box-shadow: -1px 1px 6px black;
        margin: 20px;

        &:disabled {
          opacity: 0.2;
        }

        &:active,
        &:focus {
          outline: 0;
        }
      }
    }
  }
`;

export const ContentContainer = styled.div`
  width: 70vw;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      width: 300px;
      padding: 25px;
    }

    .gif {
      width: 150px;
      transform: rotate(10deg);
    }
  }

  .main-wrapper {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 100px;
  }

  @media (max-width: 480px) {
    .header {
      .gif {
        width: 100px;
        margin-left: -20px;
      }
    }
  }
`;
