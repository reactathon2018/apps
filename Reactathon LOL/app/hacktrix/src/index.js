import React from "react";
import { render } from "react-dom";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import { browserHistory } from 'history';
import MenuAppBar from "./title";

render(
  <div>
  <MenuAppBar />
  <BrowserRouter>
    <Main />
  </BrowserRouter>
  </div>,
  document.getElementById("root")
);
