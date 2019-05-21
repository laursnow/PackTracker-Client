import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import CreatePackListForm from "../forms/add-packlist";
import Nav from "../nav";

import requiresLogin from "../requires-login";
import ErrorComponent from "../error";
import Loader from "../loader";

// Component to render form that creates a packing list

export class CreatePackList extends React.Component {
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

      return (
        <div className="item-create">
          <div className="nav">
            <Nav />
          </div>
          <h2>Create New Packing List</h2>
            <CreatePackListForm />
            <Link to="/dashboard">
              <i className="fas fa-home">
                <span className="bree-font"> Return to dashboard</span>
              </i>
            </Link>
          </div>
      );
    }
  }

const mapStateToProps = state => ({
  status: state.packApp.status,
  statusAuth: state.auth.status
});

export default requiresLogin()(withRouter(connect(mapStateToProps)(CreatePackList)));
