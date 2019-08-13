import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Error404 from "../pages/Error404/Error404";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="*" exact={true} component={Error404} />
    </Switch>
  );
};
