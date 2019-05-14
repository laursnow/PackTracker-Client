import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, withRouter, Switch } from "react-router-dom";
import { refreshAuthToken } from "../redux/actions/auth";
import LandingPage from "./landing-page";
import Login from "./login-page";
import CreatePackList from "./display/create";
import Registration from "./registration-page";
import Dashboard from "./dashboard";
import ViewPackListPage from './display/view'
import About from './about';

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
      <div className="container-app">
      <LandingPage />
        <Switch>
        <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/create" component={CreatePackList} />
        <Route exact path="/view/:id" component={ViewPackListPage} />
        <Route exact path="/about" component={About} />
        
        </Switch>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));

