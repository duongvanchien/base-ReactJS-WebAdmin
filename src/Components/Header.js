import React, { Component } from "react";
import "../Styles/Header.css";
import { Row, Avatar, Layout, Col } from "antd";

import AvatarUser from "@Assets/Header/user-avatar.jpg";

const { Header } = Layout;

class HeaderPage extends Component {
  render() {
    return (
      <Header
        className="site-layout-background site-layout-avatar"
        style={{ padding: 0 }}
      >
        <Row className="header-avatar">
          <Avatar size={40} src={AvatarUser} />
        </Row>
      </Header>
    );
  }
}

export default HeaderPage;
