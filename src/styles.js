import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /* height: ${props => (props.apiData ? "auto" : "100vh")}; */
  background: linear-gradient(to bottom, #430074, black);
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
