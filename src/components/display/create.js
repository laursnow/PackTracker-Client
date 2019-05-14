import React from "react";
import "../App.css";
import { BrowserRouter as Link } from "react-router-dom";
import CreatePackListForm from "../forms/add-packlist"
import Nav from "../nav";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";

class CreatePackList extends React.Component {
  render() {
    return (
      <div className="item-create">
        <div className="nav">
          <Nav />
        </div>
        <h2>Create New Packing List</h2>
        <CreatePackListForm/>
        <Link to="/dashboard">Return to dashboard</Link>
      </div>
    );
  }
}



export default requiresLogin()(connect()(CreatePackList));
