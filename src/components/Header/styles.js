import styled from "styled-components";

export const Container = styled.div`
  width: 40vw;
  position: relative;
  display: flex;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      width: 300px;
      padding: 25px 5px 25px 25px;
      cursor: pointer;
    }

    .gif {
      width: 150px;
      transform: rotate(10deg);
    }
  }

  .salmon-btn {
    position: absolute;
    top: 15px;
    right: 0;
  }

  @media (max-width: 1100px) {
    width: 480px;
  }

  @media (max-width: 480px) {
    width: 100vw;
    .header {
      width: inherit;
      .logo {
        width: 270px;
        padding: 25px 0;
        /* margin: 0 auto; */
        cursor: pointer;
      }

      .gif {
        display: none;
      }
    }

    .salmon-btn {
      right: 15px;
    }
  }
`;
