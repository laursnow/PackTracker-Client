import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import RegistrationForm from "./forms/registration-form";
import "./App.css";

export function Registration(props) {
  if (props.loggedIn) {
    return <Redirect to="/#up" />;
  }
  return (
    <div className="item-auth">
      <h2>Register</h2>
      <RegistrationForm />
      <HashLink to="/#up" className="up">
            Back to top
          </HashLink>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Registration);
