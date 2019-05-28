import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { fetchDashboard } from "../../redux/actions";
import Snippet from "../snippet";
import Nav from "../nav";
import requiresLogin from "../requires-login";
import { withRouter, Link } from "react-router-dom";
import Loader from "../loader";
import ErrorComponent from "../error";

// Component displays all os user's saved lists and renders child component with each list

export class Dashboard extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.snippets !== nextProps.snippets ||
      this.props.history !== nextProps.history
    );
  } // making sure the component rerenders after the fetch request updates the snippets field

  componentDidMount() {
    this.props.dispatch(fetchDashboard(this.props.user));
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
    } else {
      return (
        <div className="item-dashboard">
          <div className="nav">
            <Nav />
          </div>
          <h2 className="title-bg">{this.props.user}'s Saved Packing Lists</h2>
          {this.props.snippets.map((snippet, index) => (
            <div className="container-snippet" key={index}>
              <Snippet index={index} {...snippet} />
            </div>
          ))}

          <Link to="./create">
            <i className="fas fa-plus big">
              <span className="bree-font"> Add New</span>
            </i>
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  snippets: state.packApp.packLists,
  status: state.packApp.status,
  statusAuth: state.auth.status,
  user: state.auth.currentUser.username
});

const mapDispatchToProps = {
  fetchDashboard
};

export default requiresLogin()(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Dashboard)
  )
);
