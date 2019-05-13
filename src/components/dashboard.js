/* eslint-disable default-case */
import React from "react";
import "./App.css";
import {connect} from 'react-redux';
import { fetchDashboard } from "../redux/actions";
import Snippet from "./snippet";
import Nav from './nav';
import requiresLogin from './requires-login';
import {
  Link
} from "react-router-dom";



export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDashboard(this.props.user)); 
  }

  render() {
    const snippets = this.props.snippets.map((snippet, index) => ( <div className='container-snippet' key={index}>
    <Snippet index={index} {...snippet} />
    </div>

    ))
    return (
        <div className="item-dashboard">
              <div className="nav">  
      <Nav />
      </div>
        <h2>{this.props.user}'s Saved Itineraries</h2>
            {snippets}
          <br />
          <Link to="./create"><i className="fas fa-plus"><span className='bree-font'> Add New</span></i></Link>
          </div>
    );
  }
}
const mapStateToProps = state => ({
  snippets: state.itinerator.author_of_snippets,
  user: state.auth.currentUser
});

const mapDispatchToProps = {
  fetchDashboard
}

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
