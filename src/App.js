import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeContext } from "./theme-context";
import { PageContext } from "./theme-context";
import Router from "./routes";
import Header from "./components/Header";
import Main from "./pages/main";
import { AppContainer, GlobalStyle } from "./styles";

const App = () => {
  const pageHook = useState(1);
  return (
    <PageContext.Provider value={pageHook}>
      <AppContainer>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Router />
          {/* <Main /> */}
        </BrowserRouter>
      </AppContainer>
    </PageContext.Provider>
  );
};

export default App;
