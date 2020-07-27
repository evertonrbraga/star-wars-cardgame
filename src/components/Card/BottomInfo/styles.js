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
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin: 0;
      overflow: scroll;
      font-family: ${props =>
        props.history
          ? "Arial, Helvetica, sans-serif"
          : "Berkshire Swash, cursive"};
      padding: 10px;
      font-size: ${props => (props.history ? "0.9em" : "1.7em")};
      color: #a77133;

      text-align: center;
    }
  }
`;
