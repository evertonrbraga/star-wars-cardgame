import styled from "styled-components";

export const Container = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  p {
    color: #ec7648;
    text-align: center;
    margin: 0;
  }

  .description {
    width: 170px;
    margin: 25px auto;
    color: #f8ce0a;
  }

  .icon-container {
    display: flex;
    align-items: center;
    margin: 5px 0;

    a {
      color: #f7e5cd;
      margin: 0;
    }

    .icon {
      color: #ec7648;
      font-size: 1.7em;
      margin-right: 10px;
    }

    .action {
      margin-left: 5px;
      color: #3290c3;
    }
  }

  .salmon-btn {
    margin-top: 20px;
  }
`;
