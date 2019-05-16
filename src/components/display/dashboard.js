import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { fetchDashboard } from "../../redux/actions";
import Snippet from "../snippet";
import Nav from "../nav";
import requiresLogin from "../requires-login";
import { Link } from "react-router-dom";
import Loader from "../loader";
import ErrorComponent from "../error";

// Component displays all os user's saved lists and renders child component with each list

export class Dashboard extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }
  componentDidMount() {
    this.props.dispatch(fetchDashboard(this.props.user));
  }

  render() {
    if (this.props.status === "loading" || this.props.statusAuth === true || this.props.snippets === null) {
      return <Loader />;
    }

    if (
      this.props.status === "error" ||
      this.props.statusAuth === "error" ||
      this.props.status == null
    ) {
      return <ErrorComponent />;
    }
    else {
    const snippets = this.props.snippets.map((snippet, index) => (
      <div className="container-snippet" key={index}>
        <Snippet index={index} {...snippet} />
      </div>
    ));
    return (
      <div className="item-dashboard">
        <div className="nav">
          <Nav />
        </div>
        <h2 className="title-bg">{this.props.user}'s Saved Packing Lists</h2>
        {snippets}
        <br />
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
  status: state.packApp.status,
  statusAuth: state.auth.status,
  snippets: state.packApp.packLists,
  user: state.auth.currentUser.username
});

const mapDispatchToProps = {
  fetchDashboard
};

export default requiresLogin()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
