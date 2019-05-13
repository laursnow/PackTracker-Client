import React from "react";
import "./App.css";
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom';
import RegistrationForm from '../components/forms/registration-form'
import "./App.css";



export function Registration(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="item-auth">
            <h2>Register</h2>
            <RegistrationForm />
            <Link to="/" className="up">Return to main</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Registration);