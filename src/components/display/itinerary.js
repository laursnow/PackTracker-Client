import React from "react";
import "../App.css";
import {BrowserRouter as Link} from 'react-router-dom';


export class Itinerary extends React.Component {
    render() {
        return (
            <div className="About">
                <header>
                    <h1><Link to="/">Itinerator</Link></h1>
                </header>
                <main>
                    <h2>Itinerary Title</h2>
                    <p>blahblah edit delete blah blah</p>
                <Link to="/dashboard">Return to dashboard</Link>
                </main>
            </div>
        )
    }
}


export default Itinerary;