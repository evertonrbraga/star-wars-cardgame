import styled from "styled-components";

export const CardContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Arvo:700i&display=swap");

  width: 250px;
  height: 380px;
  border: 3px solid #335777;
  margin: 15px;
  border-radius: 10px;
  background: #3290c3;

  h1 {
    font-family: "Arvo", serif;
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
    padding: 8px 8px 6px 8px;
    box-sizing: border-box;
    border-radius: 20px;
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
      /** Offset the Position **/
      position: relative;

      /** 3D Block Effect **/
      box-shadow: 0 10px 0 0 #754e23;

      /** Make it look pretty **/
      display: flex;
      background: #a77133;
      border: 3px solid #754e23;
      color: #eee;
      cursor: pointer;
      opacity: 0.9;
      border-radius: 10px;
    }

    .clicky:active {
      /** Remove 3D Block Effect on Click **/
      box-shadow: none;

      top: 10px;
      margin-bottom: 0px;
    }

    .clicked {
      /** Remove 3D Block Effect on Click **/
      box-shadow: none;

      top: 10px;
      margin-bottom: 0px;
    }

    .clicky:active,
    .clicky:focus {
      /** Remove Chrome's Ugly Yellow Outline **/
      outline: 0;
    }

    /* .unclicked-button {
      box-shadow: -2px 2px 3px #2e2622;
    }

    .clicked-button {
      inner-shadow: -2px 2px 3px #2e2622;
    } */

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
      /* justify-content: center; */
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

      .icon-arrow {
        font-size: 1.2em;
        color: #a77133;
        position: absolute;
        right: 3px;
        top: 30px;
      }

      .content {
        margin-left: 12px;

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
    font-weight: bold;
    color: #ff9999;
  }
`;
