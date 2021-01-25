import React, { Component } from "react";
import { STRING } from "@Constant/Contant";

class ScreenOptions extends Component {
  render() {
    return (
      <>
        <div style={{ margin: "16px 0" }}>
          <h1 className="title-tab">{STRING.Options}</h1>
        </div>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 480 }}
        ></div>
      </>
    );
  }
}

export default ScreenOptions;
