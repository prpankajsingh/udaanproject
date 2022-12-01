import React from "react";
import SignUp from "../../Components/SignIn/SignUp";
import SignIn from "../../Components/SignIn/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpHeader from "../../Components/SignIn/SignUpHeader";
import Welcome from "../../Components/SignIn/Welcome";

function SignUpPages() {
  return (
    <Router>
      <div>
        <SignUpHeader />
        <Switch>
          <Route path="/SignUp" component={SignUp} exact />
          <Route path="/SignIn" component={SignIn} exact />
          <Route path="/Welcome" component={Welcome} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default SignUpPages;
