import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { PageContext } from "./page-context";
import Routes from "./routes";
import Header from "./components/Header";
import { Container, GlobalStyle } from "./styles";

const App = () => {
  const page = useState(1);
  return (
    <PageContext.Provider value={page}>
      <Container>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes />
        </BrowserRouter>
      </Container>
    </PageContext.Provider>
  );
};

export default App;
