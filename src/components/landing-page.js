import React from "react";
import "./App.css";
import {
  Link
} from "react-router-dom";
import { connect } from "react-redux";
import { HashLink } from "react-router-hash-link";


export class LandingPage extends React.Component {
    render() {
      return (
          <div className="container-app">
            <div className="item-landing-1">
            <div className="item-title">
              <h1 id="top" className="shadow">
                TrackPack
              </h1>
              <h3 className="shadow">
                A simple web app for tracking trip packing
              </h3>
              </div></div>
              <div className="item-landing-2">
              <ul className="landing-links">
                <li className="shadow animate">
                  <Link to="/login">Login</Link>
                </li>
  
                <li className="shadow animate">
                  <Link to="/register">Register</Link>
                </li>
  
                <li className="shadow animate">
                  <Link to="/about">Learn More</Link>
                </li>
              </ul>
            </div>
          </div>
      );
    }
  }
    
  export default connect()(LandingPage);
  
  
