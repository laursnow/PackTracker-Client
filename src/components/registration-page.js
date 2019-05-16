import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import RegistrationForm from "./forms/registration-form";
import "./App.css";

export function Registration(props) {
  if (props.loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="item-auth">
      <h2>Register</h2>
      <RegistrationForm />
      <Link to="/" className="up">
        Back to top
      </Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Registration);
