import React from "react";
import "./App.css";
import {
  Link, Redirect
} from "react-router-dom";
import {connect} from 'react-redux';
import {clearAuth} from '../redux/actions/auth';
import {clearAuthToken} from '../redux/local-storage';



export class Nav extends React.Component {
  // OnClick() {
  //   this.props.dispatch(clearAuth());
  //   clearAuthToken();
  //   console.log('firing')
  // }


//   componentDidMount() {
//     if (this.props.loggedIn == null) {
//       return <Redirect to="/dashboard" />;
//   }
// }
  render() {
// need to call clearAuthToken()
    console.log('render',this.props.loggedIn);
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

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);