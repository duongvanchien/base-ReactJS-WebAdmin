import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import ScreenLogin from "@Screens/Login/ScreenLogin";
import ScreenNotFound from "@Screens/NotFound/ScreenNotFound";
import MainNavigator from "./MainNavigator";

export class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Login" exact component={ScreenLogin} />
          <Route path="/PageNotFound" exact component={ScreenNotFound} />
          <MainNavigator/>
          {/* <PrivateRoute path="/" exact Component={MainNavigator} /> */}
        </Switch>
      </Router>
    );
  }
}

export default AppNavigator;
