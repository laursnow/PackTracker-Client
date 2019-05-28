import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { HashLink } from "react-router-hash-link";
import demo from "../images/demo-img.png";

export class About extends React.Component {
  render() {
    return (
      <div className="item-about">
        <h2>PackTracker: Don't forget another thing.</h2>
        <p style={{ fontSize: "30px", color: "white", margin: "5px" }}>
          Create, edit and save packing lists for your upcoming trip.
        </p>
        <br />
        <img src={demo} style={{ maxWidth: "100%" }} alt="app demo" />
        <br />
        <HashLink to="/#up" className="up">
          Back to top
        </HashLink>
      </div>
    );
  }
}

export default connect()(About);
