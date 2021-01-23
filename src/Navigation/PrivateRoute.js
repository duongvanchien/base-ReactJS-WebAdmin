import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookie from "js-cookie";

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verified: false,
    };
  }
  render() {
    const { path, Component, exact } = this.props;
    const props = this.props;
    let token = Cookie.get("SESSION_ID");
    let hasToken = token ? true : false;
    return (
      <Route
        path={path}
        exact={exact}
        render={(routeProps) =>
          hasToken == true ? (
            <Component {...props} {...routeProps} />
          ) : (
            <Redirect to="/Login" />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
