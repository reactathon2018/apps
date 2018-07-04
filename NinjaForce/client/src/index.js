import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import "assets/css/material-dashboard-react.css";

import indexRoutes from "routes/index.jsx";

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});
const hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <ApolloProvider client={client}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
