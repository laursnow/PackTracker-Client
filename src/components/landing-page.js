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
            <div className="item-landing">
              <h1 id="top" className="shadow">
                <Link to="/">Itinerator</Link>
              </h1>
              <h3 className="shadow">
                A simple web app for building travel itineraries
              </h3>
              <ul className="landing-links">
                <li className="shadow">
                  <Link to="/login">Login</Link>
                </li>
  
                <li className="shadow">
                  <Link to="/register">Register</Link>
                </li>
  
                <li className="shadow animate">
                  <HashLink to="/#about">Learn More</HashLink>
                </li>
              </ul>
            </div>
  
            <div id="about" className="item-about">
              blah.
              <HashLink to="/#top">Back to top</HashLink>
            </div>
          </div>
      );
    }
  }
    
  export default connect()(LandingPage);
  
  // Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
  
