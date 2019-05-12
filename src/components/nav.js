import React from "react";
import "./App.css";
import {
  Link
} from "react-router-dom";
// import CreateItinerary from "./display/create";
// import Registration from "./registration-page";

class Nav extends React.Component {
  render() {
    return (
        <ul className="nav-links">
          <li className="shadow">
            <Link to="/create">Create New</Link>
          </li>

          <li className="shadow">
            <Link to="/Dashboard">Dashboard</Link>
          </li>

          <li className="shadow">
            <Link to="/">Logout</Link>
          </li>
        </ul>
    );
  }
}

export default Nav;
