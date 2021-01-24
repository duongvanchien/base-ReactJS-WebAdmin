import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import HeaderPage from "../Components/Header";

import { Layout,Breadcrumb } from "antd";
const { Content } = Layout;

class MainNavigator extends Component {
  render() {
    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <NavBar />
          <Layout className="site-layout">
            <HeaderPage />
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                Bill is a cat.
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default MainNavigator;
