import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { refreshAuthToken } from "../redux/actions/auth";
import LandingPage from "./landing-page";
import store from "../redux/store";
import Login from "./login-page";
import CreateItinerary from "./display/create";
import Registration from "./registration-page";
import Dashboard from "./dashboard";
import ViewItinerary from './display/view'

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
    console.log("app inside render", store.getState());
    return (
      <div className="container-app">
        {this.props.loggedIn && this.props.hasAuthToken !== null ? (
          <Dashboard store={store} />
        ) : (
          <LandingPage />
        )}
        <Route exact path="/login" component={Login} />

        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/create" component={CreateItinerary} />
        <Route exact path="/view/:id" component={ViewItinerary} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // hasAuthToken: state.auth.authToken !== null,
  // loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
