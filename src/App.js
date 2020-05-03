import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeContext } from "./theme-context";
import Router from "./routes";
import Header from "./components/Header";
import Main from "./pages/main";
import { AppContainer, GlobalStyle } from "./styles";

const App = () => {
  const themeHook = useState("yellow");
  return (
    <ThemeContext.Provider value={themeHook}>
      <AppContainer>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Router />
          {/* <Main /> */}
        </BrowserRouter>
      </AppContainer>
    </ThemeContext.Provider>
  );
};

export default App;
