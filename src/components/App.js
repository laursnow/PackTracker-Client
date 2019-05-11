import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import Login from "./login-page";
import { HashLink } from "react-router-hash-link";

import Dashboard from "./dashboard";
import { refreshAuthToken } from "../redux/actions/auth";
import CreateItinerary from "./display/create";
import Registration from "./registration-page";

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }
  render() {
    return (
      <Router>
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
            <Route exact path="/login" component={Login} />

            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Registration} />

            <Route exact path="/create" component={CreateItinerary} />
          </div>

          <div id="about" className="item-about">
            blah.
            <HashLink to="/#top">Back to top</HashLink>
          </div>
        </div>
      </Router>
    );
  }
}

// const mapStateToProps = state => ({
//     hasAuthToken: state.auth.authToken !== null,
//     loggedIn: state.auth.currentUser !== null
// });
export default App;
// export default withRouter(connect(mapStateToProps)(App));

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
