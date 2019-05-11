import React from "react";
import "../App.css";
import {BrowserRouter as Link} from 'react-router-dom';
import Nav from '../nav';


export class ViewItinerary extends React.Component {
    render() {
        return (
            <div className='nav'><Nav />
            <div className="item-view">
                <header>
                    <h1><Link to="/">Itinerator</Link></h1>
                </header>
                <main>
                    <h2>Itinerary Title</h2>
                    <p>blahblah edit delete blah blah</p>
                <Link to="/dashboard">Return to dashboard</Link>
                </main>
            </div>
            </div>
        )
    }
}


export default ViewItinerary;