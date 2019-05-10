import React from "react";
import "./App.css";
import {BrowserRouter as Link} from 'react-router-dom';


export class About extends React.Component {
    render() {
        return (
            <div className="About">
                <header>
                    <h1><Link to="/">Itinerator</Link></h1>
                </header>
                <main>
                    <p>Longer info about app</p>
                <Link to="/">Return to main</Link>
                </main>
            </div>
        )
    }
}


export default About;