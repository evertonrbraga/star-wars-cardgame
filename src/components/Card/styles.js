import styled from "styled-components";

export const CardContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Arvo:700i&display=swap");

  width: 250px;
  height: 380px;
  margin: 15px;
  border-radius: 10px;
  background: #3290c3;
  box-shadow: -3px 3px 10px black;

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
    height: 140px;
    padding: 8px 8px 6px 8px;
    box-sizing: border-box;
    border-radius: 20px;
    object-fit: cover;
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
    }

    .homeworld > span {
      margin-left: -2px;
    }

    .starships > span {
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

    .info {
      display: flex;
      align-items: center;
      width: 230px;
      height: 80px;
      border-radius: 5px;
      background: #f7e5cd;
      position: relative;

      .icon {
        margin-left: 12px;
        font-size: 3.5em;
        color: #a77133;
      }

      .content {
        margin-left: 12px;
        display: flex;
        flex-direction: column;

        p {
          margin: 2px;
          font-size: 0.75em;
          color: #5e482b;

          strong {
            color: #5e482b;
          }
        }
      }
    }
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
