import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
  height: 80px;
  border-radius: 5px;
  background: #f7e5cd;
  position: relative;

  .icon {
    margin-left: 18px;
    font-size: 5em;
    color: #3290c3;
  }

  .content {
    /* margin-left: 12px; */
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-family: "Berkshire Swash", cursive;
      padding: 25px;
      font-size: 1.7em;
      /* color: #5e482b; */
      color: #a77133;

      text-align: center;
    }
  }
`;
