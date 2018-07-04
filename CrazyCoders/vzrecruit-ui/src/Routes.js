import React from "react";
import Signup from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import Switch from "react-switch";


export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component="./containers/Login.js" />    
    { /* Finally, catch all unmatched routes */ }
   
  </Switch>;


//<AppliedRoute path="/signup" exact component={Signup} props={childProps} />
