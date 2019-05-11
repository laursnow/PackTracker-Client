import React from "react";
import "../App.css";
import {BrowserRouter as Link} from 'react-router-dom';
import CreateActivityForm from '../forms/add-activity';
import CreateItineraryForm from '../forms/add-itinerary';
import CreateLodgingForm from '../forms/add-lodging';
import CreateTravelForm from '../forms/add-travel';
import Nav from '../nav';



class CreateItinerary extends React.Component {
    render() {
        return (
            <div className='nav'><Nav />
            <div className="item-create">
                    <h1><Link to="/">Itinerator</Link></h1>
                <main>
                    <CreateItineraryForm />
                    <CreateTravelForm />
                    <CreateActivityForm />
                    <CreateLodgingForm />

                <Link to="/dashboard">Return to dashboard</Link>
                </main>
            </div>
            </div>
        )
    }
}


export default CreateItinerary;

