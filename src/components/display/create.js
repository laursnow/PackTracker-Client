import React from "react";
import "../App.css";
import { BrowserRouter as Link } from "react-router-dom";
import CreateActivityForm from "../forms/add-activity";
import CreateItineraryForm from "../forms/add-itinerary";
import CreateLodgingForm from "../forms/add-lodging";
import CreateTravelForm from "../forms/add-travel";
import Nav from "../nav";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";

class CreateItinerary extends React.Component {
  render() {
    return (
      <div className="item-create">
        <div className="nav">
          <Nav />
        </div>{" "}
        <h2>Create New Itinerary</h2>
        <CreateItineraryForm />
        <CreateTravelForm />
        <CreateActivityForm />
        <CreateLodgingForm />
        <Link to="/dashboard">Return to dashboard</Link>
      </div>
    );
  }
}

export default requiresLogin()(connect()(CreateItinerary));
