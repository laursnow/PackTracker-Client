import React from "react";
import "../App.css";
import { BrowserRouter as Link } from "react-router-dom";
import Nav from "../nav";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { fetchItinerary } from "../../redux/actions";
import ViewItinerary from "./view-component";

export class ViewItineraryPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      fetchItinerary(this.props.snippet[this.props.location.state.index]._id)
    );
  }
  render() {
    console.log(this.props.itinerary, "@@@"); //need to code an element to render(like db => snippet)
    const view =
      <div className="container-snippet" key={this.props.location.state.index}>
        <ViewItinerary props={this.props.itinerary} />
      </div>;
    return (
      <div className="item-view">
        <div className="nav">
          <Nav />
        </div>
        {view}
        <Link to="/dashboard">Return to dashboard</Link>
      </div>
    );
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    snippet: state.itinerator.author_of_snippets,
    itinerary: state.itinerator.itineraries
  };
};

const mapDispatchToProps = {
  fetchItinerary
};

export default requiresLogin()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewItineraryPage)
);
