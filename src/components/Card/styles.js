import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  height: 422px;
  margin: 15px;
  border-radius: 10px;
  background: #3290c3;
  box-shadow: -3px 3px 10px black;
  overflow: hidden;

  h1 {
    font-family: "Arvo", sans-serif;
    font-size: 1.4em;
    text-align: center;
    background: #ec7648;
    padding: 10px;
    margin: 0px 0;
    color: #f7e5cd;
    text-shadow: 2px 2px 3px #2e2622;
  }

  img {
    width: 100%;
    height: 180px;
    padding: 8px 8px 6px 8px;
    box-sizing: border-box;
    border-radius: 20px;
    object-fit: cover;
    object-position: 0px 0px;
  }

  .icons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 8px;

    button {
      background: #a77133;
      width: 45%;
      height: 40px;
      border: none;

      span {
        display: flex;
        align-items: center;
        font-size: 0.8em;
        color: #f7e5cd;
      }

      .btn-history {
        .icon {
          margin-right: 15px;
        }
      }
    }

    .homeworld,
    .history {
      display: flex;
      align-items: center;
    }

    .homeworld > span {
      margin-left: -2px;
    }

    .history > span {
      margin-left: 4px;
    }

    .clicky {
      position: relative;
      box-shadow: 0 10px 0 0 #754e23;
      display: flex;
      background: #a77133;
      border: 3px solid #754e23;
      color: #eee;
      cursor: pointer;
      opacity: 0.9;
      border-radius: 10px;
    }

    .clicky:active {
      box-shadow: none;
      top: 10px;
      margin-bottom: 0px;
    }

    .clicked {
      box-shadow: none;
      top: 10px;
      margin-bottom: 0px;
    }

    .clicky:active,
    .clicky:focus {
      outline: 0;
    }

    .icon {
      color: #f7e5cd;
      font-size: 24px;
      margin-right: 7px;
    }
  }

  .info-container {
    display: flex;
    justify-content: center;
    margin-top: 21px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #2e2622;

  p,
  span {
    margin: 0;
    font-size: 0.8em;
    color: #f7e5cd;
  }

  .attribute {
    font-weight: 700;
    color: #ff9999;
  }
`;
