import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './login-page'
import Registration from './registration-page'
import { HashLink } from 'react-router-hash-link';
import CreateItineraryForm from "./forms/add-itinerary";


export class App extends React.Component {
    render() {
        return (
            <Router>
            <div className="App">
                <header>
                    <h1 id='top' className="shadow"><Link to="/">Itinerator</Link></h1>
                </header>
                    <div className ='desc'>
                    <h3 className="shadow">A simple web app for building travel itineraries</h3></div>
                    <ul className='landing-links'>
                <li className="shadow"><Link to="/login">Login</Link></li>

                <li className="shadow"><Link to="/register">Register</Link></li> 

                <li className="shadow"><Link to="/create">Create New</Link></li> 

                <li className="shadow animate"><HashLink to="/#about">Learn More</HashLink></li> 
                </ul>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Registration} />
                    <Route exact path="/create" component={CreateItineraryForm} />
                    

                <div id='about' className="about">
                blah.
                <HashLink to="/#top">Back to top</HashLink></div>

            </div>
        </Router>
        )
    }
}


export default App;
