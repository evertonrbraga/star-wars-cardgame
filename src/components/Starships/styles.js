import styled from "styled-components";

export const StarshipsContainer = styled.div`
  .icon-arrow {
    font-size: 1.2em;
    color: #a77133;
    position: absolute;
    right: 0;
    top: 30px;
  }

  .starship-warning {
    text-align: center;

    .name {
      font-size: 1.2em;
      font-weight: 700;
    }
  }
`;

export const InfoContainer = styled.div`
  height: 80px;
  box-sizing: border-box;
  overflow: scroll;

  .texts {
    margin: 9px 0;
  }
`;
