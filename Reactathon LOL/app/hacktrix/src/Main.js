import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./form";
import App from "./App";
import TablePaginationActions from "./leadershipGrid"
import SimpleMediaCard from "./scoreboard"
// import { browserHistory } from "history";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/leadergrid/:leaderid" component={TablePaginationActions} />
      <Route exact path="/scoreboard" component={SimpleMediaCard} />
    </Switch>
  </main>
);

export default Main;
