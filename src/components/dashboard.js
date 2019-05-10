import React from "react";
import "./App.css";
import {BrowserRouter as Link} from 'react-router-dom';


export class Dashboard extends React.Component {
    render() {
        return (
            <div className="Dashboard">
                <header>
                    <h1><Link to="/">Itinerator</Link></h1>
                </header>
                <main>
                    <p>User dashboard. Snippets below</p>
                </main>
            </div>
        )
    }
}


export default Dashboard;