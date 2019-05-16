import React from "react";
import Nav from "./nav";
import "./App.css";
import { connect } from "react-redux";

// Component for error display

export class ErrorComponent extends React.Component {
  render() {
    return (
      <div className="item-view">
        <div className="nav">
          <Nav />
        </div>
        <div className="error">
          <h5>An error occurred.</h5>
          <p style={{ color: "black" }}>Please try again.</p>
          <p style={{ color: "black" }}>
            {this.props.errorMain}
            {this.props.ErrorAuth}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.packApp.error,
  errorAuth: state.auth.error
});

export default connect(mapStateToProps)(ErrorComponent);
