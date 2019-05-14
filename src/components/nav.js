import React from "react";
import "./App.css";
import {
  Link, Redirect
} from "react-router-dom";
import {connect} from 'react-redux';
import {clearAuth} from '../redux/actions/auth';
import {clearAuthToken} from '../redux/local-storage';



export class Nav extends React.Component {
  render() {
    return (
      <div className="item-nav">
        <ul className="nav">
          <li className="nav">
            <Link to="/create">Create New</Link>
          </li>

          <li className="nav">
            <Link to="/Dashboard">Dashboard</Link>
          </li>

          <li className="nav" onClick={() => {
            this.props.clearAuth();
            clearAuthToken(); }}>
          Log out
          </li>
        </ul>
        </div>
    );
  }
}


const mapDispatchToProps =  {
  clearAuth,
  clearAuthToken
}



export default connect(null, mapDispatchToProps)(Nav);