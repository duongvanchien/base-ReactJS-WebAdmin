import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import ScreenLogin from "../Screens/Login/ScreenLogin";

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
          <Route path="/" exact component={ScreenLogin} />
          {/* <Route
            path={ROUTER.FORGET_PASSWORD}
            exact
            component={ForgetPasswordScreen}
          />
          <Route path="/PageNotFound" exact component={PageNotFound} />
          <PrivateRoute
            path="/"
            Component={MainNavigator}
            user={this.props.userInfoState}
          /> */}
        </Switch>
      </Router>
    );
  }
}

export default AppNavigator;
