import React from "react";
import { Route, Switch } from "react-router-dom";

import Info from "./pages/info";
import Main from "./pages/main";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/info" component={Info} />
  </Switch>
);

export default Routes;
