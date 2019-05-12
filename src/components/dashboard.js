/* eslint-disable default-case */
import React from "react";
import "./App.css";
import {connect} from 'react-redux';
import { fetchDashboard } from "../redux/actions";
import Snippet from "./snippet";
import Nav from './nav';
import store from '../redux/store'
import {
  Link
} from "react-router-dom";



export class Dashboard extends React.Component {
  // dispatchAction (id) {
  //     switch (id) {
  //       case "TRASH":
  //         this.props.store.dispatch(deleteItinerary(this.props.id));
  //         break;
        //   case "EDIT":
        // this.props.store.dispatch(editForm());
        //   break;
    //   }
    // }
  componentWillMount() {
    // this.props.store.subscribe(this.forceUpdate.bind(this));
    // this.props.store.dispatch(fetchDashboard()); 
  }

  render() {
    const snippets = this.props.snippets.map((snippet, index) => ( <div className='container-snippet' key={index}>
    <Snippet index={index} {...snippet} />
    </div>

    ))
    return (
        <div className="dashboard">
      <div className="nav">  
          <Nav />
               <div className="item-dashboard">
            <h1 id="top" className="shadow">
              <Link to="/">Itinerator</Link>
            </h1>
            <h2>Saved Itineraries</h2>
            {snippets}
          </div>
          <br />
          <Link to="./create"><i class="fas fa-plus"></i> Add New</Link>
          </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  snippets: state.itinerator.author_of_snippets
});

export default connect(mapStateToProps)(Dashboard);

// const mapStateToProps = state => {
//   const {currentUser} = state.auth;
//   return {
//       username: state.auth.currentUser.username,
//       name: `${currentUser.firstName} ${currentUser.lastName}`,
//       protectedData: state.protectedData.data
//   };
// };

// export default requiresLogin()(connect(mapStateToProps)(Dashboard));