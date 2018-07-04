import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./components/not-found";
import HackathonDetails from "./containers/hackathon-details";
import LoginContainer from "./containers/login-container";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={LoginContainer} />
        <Route
          exact
          path="/hackathon/:hackathonId"
          component={HackathonDetails}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
