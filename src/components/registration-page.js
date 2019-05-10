import React from "react";
import "./App.css";
import {BrowserRouter as Link} from 'react-router-dom';


export class Registration extends React.Component {
    render() {
        return (
            <div className="Registration">
                <header>
                    <h1><Link to="/">Itinerator</Link></h1>
                </header>
                <main>
                    <p>Register. Form below</p>
                <Link to="/">Return to main</Link>
                </main>
            </div>
        )
    }
}


export default Registration;