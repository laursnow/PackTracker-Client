import React from "react";
import "./App.css";
import { BrowserRouter as Link } from "react-router-dom";
import { fetchDashboard } from "../redux/actions";
import Snippet from "./snippet";
import Loader from "./loader";
import Nav from './nav';

const status = "success";

class Dashboard extends React.Component {
    
  // dispatchAction (input) {
  //     switch (input) {
  //       case "TRASH":
  //         this.props.store.dispatch(DeleteItinerary());
  //         break;
  //       case "PLUS":
  //         this.props.store.dispatch(AddItinerary());
  //         break;
  //         case "EDIT":
  //       this.props.store.dispatch(EditItinerary());
  //         break;
  //     }
  //   }
//   componentWillMount() {
    // this.props.store.subscribe(this.forceUpdate.bind(this));
    // this.props.store.dispatch(fetchDashboard()); 
//   }

  render() {
    // const stateProps = this.props.store.getState();
    //     console.log(stateProps);
    //     const items = stateProps.itineraries.map((itinerary) =>
    //     <Snippet
    //       key = { itinerary.id }
    //       id = { itinerary.id }
    //       title = { itinerary.title }
    //       date_leave = { itinerary.date_leave }
    //       date_return = { itinerary.date_return }
    //       timestamp = { itinerary.timestamp }
    //       dispatchAction = {this.dispatchAction.bind(this)}
    //       />
    //   );
    //   console.log(items);
    // console.log(stateProps, stateProps.author_of_snippets);
    return (
      <div className="dashboard">
        {status === "loading" ? (
          <Loader />
        ) : (
      <div className="nav">  
          <Nav />
               <div className="item-dashboard">
            <h1 id="top" className="shadow">
              <Link to="/">Itinerator</Link>
            </h1>
            <h2>Dashboard info blah blah</h2>
            <Snippet />
          </div>
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
