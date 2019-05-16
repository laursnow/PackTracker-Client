import React from "react";
import Nav from "./nav";
import spinner from "../images/spinner-plane.gif";
import "./App.css";

export class Loader extends React.Component {
  render() {
    return (
      <div className="item-view">
        <div className="nav">
          <Nav />
        </div>
        <div className="loader">
          <h5>Loading...</h5>
          <img src={spinner} alt="loading" />
        </div>
      </div>
    );
  }
}
export default Loader;
