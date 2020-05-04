import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { PageContext } from "./page-context";
import Router from "./routes";
import Header from "./components/Header";
import { AppContainer, GlobalStyle } from "./styles";

const App = () => {
  const page = useState(1);
  return (
    <PageContext.Provider value={page}>
      <AppContainer>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Router />
        </BrowserRouter>
      </AppContainer>
    </PageContext.Provider>
  );
};

export default App;
