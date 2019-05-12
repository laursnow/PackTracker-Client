import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';
import RegistrationForm from '../components/forms/registration-form'
import "./App.css";

export class Registration extends React.Component {
    render() {
        return (
            <div className="item-registration">
                <header>
                    <h1><Link to="/">Itinerator</Link></h1>
                </header>
                <main>
                    <p>Register. Form below</p>
                    <RegistrationForm />
                <Link to="/">Return to main</Link>
                </main>
            </div>
        )
    }
}


export default Registration;