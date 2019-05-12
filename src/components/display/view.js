import React from "react";
import "../App.css";
import {BrowserRouter as Link} from 'react-router-dom';
import Nav from '../nav';
import {connect} from 'react-redux';


export class ViewItinerary extends React.Component {

    render() {
        let index = this.props.location.state.index;
        return (
            <div className='nav'><Nav />
            <div className="item-view">
                <header>
                    <h1><Link to="/">Itinerator</Link></h1>
                </header>
                <main>
                    <h2>{this.props.selectedItinerary.title}</h2>
                    <p>List itinerary items here</p>
                <Link to="/dashboard">Return to dashboard</Link>
                </main>
            </div>
            </div>
        )
    }
}

const mapStateToProps = function(state, ownProps) {
   return {
    selectedItinerary: state.itinerator.itineraries[ownProps.location.state.index]
  }};
  
  export default connect(mapStateToProps)(ViewItinerary);
