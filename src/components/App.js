import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, withRouter, Switch } from "react-router-dom";
import { refreshAuthToken } from "../redux/actions/auth";
import LandingPage from "./landing-page";
import Login from "./login-page";
import CreatePackList from "./display/create";
import Registration from "./registration-page";
import Dashboard from "./display/dashboard";
import ViewPackListPage from "./display/view";
import About from "./about";
import Scroll from "./scroll";

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 
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
      <div className="container-app" id="#up">
                  <LandingPage />
        <Switch>

          <Scroll>
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/create" component={CreatePackList} />
            <Route exact path="/view/:id" component={ViewPackListPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={LandingPage} />
          </Scroll>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  status: state.packApp.status,
  statusAuth: state.auth.status
});

export default withRouter(connect(mapStateToProps)(App));
