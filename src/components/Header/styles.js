import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 45vw;
  position: relative;
  display: flex;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      width: 300px;
      padding: 25px;
      cursor: pointer;
    }

    .gif {
      width: 150px;
      transform: rotate(10deg);
    }
  }
  .btn-info {
    position: absolute;
    top: 15px;
    right: 0;
    color: #fff;
    font-weight: bold;
    background: #ec7648;
    text-shadow: -1px 1px 2px #2e2622;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: -1px 1px 3px black;
    text-decoration: none;
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
