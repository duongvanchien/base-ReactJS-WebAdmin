import React, { Component } from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className="bg-screen-notfound">
        <div className="agileits-main">
          <div className="agileinfo-row">
            <div className="w3layouts-errortext">
              <h2>
                4<span className="zero-text">0</span>4
              </h2>
              <h1>Sorry! The page you were looking for could not be found </h1>
              <p className="w3lstext">
                You have been tricked into click on a link that can not be
                found. Please check the url or go to{" "}
                <Link to="/">main page</Link> and see if you can locate what you
                are looking for{" "}
              </p>
              <div className="agile-search">
                <form action="#" method="post">
                  <input
                    type="text"
                    name="Search"
                    placeholder="Enter your search term..."
                    id="search"
                    required
                  />
                  <input type="submit" defaultValue="Search" />
                </form>
              </div>
              <div className="w3top-nav-right">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* //main */}
        {/* copyright */}
        {/* <div className="copyright w3-agile">
          <p>
            © 2017 Elegant Error Page . All rights reserved | Design by{" "}
            <a href="http://w3layouts.com/" target="_blank">
              W3layouts
            </a>
          </p>
        </div> */}
      </div>
    );
  }
}

export default NotFound;
