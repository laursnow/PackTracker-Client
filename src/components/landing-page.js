import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { clearAuth } from "../redux/actions/auth";
import { clearAuthToken } from "../redux/local-storage";
import "./App.css";

// Landing page. Has different menu displays depending on if user is logged in

export class LandingPage extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.loggedIn !== nextProps.loggedIn; // ensuring the component updates only under these circumstances
  }
  render() {
    if (this.props.loggedIn) {
      // display when logged in
      return (
        <div className="container-app">
          <div className="item-landing-1">
            <div className="item-title">
              <h1 id="top" className="shadow">
                TrackPack
              </h1>
              <h3 className="shadow">Use navigation to begin ></h3>
            </div>
          </div>
          <div className="item-landing-2">
            <ul className="landing-links">
              <li className="shadow animate">
                <Link to="/create">Create New</Link>
              </li>

              <li className="shadow animate">
                <Link to="/Dashboard">Dashboard</Link>
              </li>

              <li
                className="shadow animate landing-links logout"
                onClick={() => {
                  this.props.clearAuth();
                  clearAuthToken();
                }}
              >
                Log out
              </li>
            </ul>
          </div>
        </div>
      );
    }
    if (!this.props.loggedIn) {
      return (
        // display when not logged in
        <div className="container-app">
          <div className="item-landing-1">
            <div className="item-title">
              <h1 id="top" className="shadow">
                TrackPack
              </h1>
              <h3 className="shadow">
                A simple web app for tracking trip packing
              </h3>
            </div>
          </div>
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
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  status: state.packApp.status,
  statusAuth: state.auth.status
});

const mapDispatchToProps = {
  clearAuth,
  clearAuthToken
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LandingPage)
);
