import React from "react";
import ReactDOM from "react-dom";
import ReduxPromise from "redux-promise";
import "./index.css";
import Router from "./Router";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
