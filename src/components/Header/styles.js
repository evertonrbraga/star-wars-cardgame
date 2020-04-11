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
  .route-btn {
    position: absolute;
    top: 15px;
    right: 0;
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
