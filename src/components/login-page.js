import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { withRouter, Redirect } from "react-router-dom";
import LoginForm from "./forms/login-form";
import ErrorComponent from "./error";
import Loader from "./loader";

export class Login extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.props.history.push("/#up");
    }
  }
  render() {
    if (this.props.status === "loading" || this.props.statusAuth === true) {
      return <Loader />;
    }

    if (
      this.props.status === "error" ||
      this.props.statusAuth === "error" ||
      this.props.status == null
    ) {
      return <ErrorComponent />;
    }

    if (this.props.loggedIn) {
      return <Redirect to="/#up" />;
    }
    return (
      <div className="item-auth">
        <main>
          <h2>Login</h2>
          <LoginForm />
          <HashLink to="/#up" className="up">
            Back to top
          </HashLink>
        </main>
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

export default withRouter(connect(mapStateToProps)(Login));
