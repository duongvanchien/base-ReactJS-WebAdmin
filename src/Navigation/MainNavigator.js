import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import NavBar from "@Components/NavBar";
import HeaderPage from "@Components/Header";

import ScreenOverview from "@Screens/Overview/ScreenOverview.jsx";
import ScreenOptions from "@Screens/Options/ScreenOptions.jsx";
import ScreenTutorial from "@Screens/Tutorial/ScreenTutorial.jsx";

import { Layout } from "antd";
import { ROUTER } from "@Constant/Contant";
const { Content } = Layout;

class MainNavigator extends Component {
  renderRoute() {
    return (
      <Switch>
        <Route path={ROUTER.Overview} exact component={ScreenOverview} />
        <Route path={ROUTER.Options} exact component={ScreenOptions} />
        <Route path={ROUTER.Tutorial} exact component={ScreenTutorial} />
      </Switch>
    );
  }

  render() {
    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <NavBar />
          <Layout className="site-layout">
            <HeaderPage />
            <Content style={{ margin: "0 16px" }}>{this.renderRoute()}</Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default MainNavigator;
