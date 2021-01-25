import React, { Component } from "react";
import "@Styles/NavBar.css";
import { STRING, ROUTER } from "@Constant/Contant";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class NavBar extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Sider
        collapsible={true}
        collapsed={collapsed}
        onCollapse={this.onCollapse}
        breakpoint="md"
      >
        <div className="logo"></div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to={ROUTER.Overview}>{STRING.Overview}</Link>
          </Menu.Item>

          <SubMenu key="sub1" icon={<UserOutlined />} title={STRING.User}>
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to={ROUTER.Options}>{STRING.Options}</Link>
          </Menu.Item>
          <SubMenu key="sub2" icon={<TeamOutlined />} title={STRING.Groups}>
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            <Link to={ROUTER.Tutorial}>{STRING.Tutorial}</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default NavBar;
