import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';
import LoginForm from './forms/login-form'


export class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <header>
                    <h1><Link to="/">Itinerator</Link></h1>
                </header>
                <main>
                    <h2>login. form component below</h2>
                    <LoginForm />
                <Link to="/">Return to main</Link>
                </main>
            </div>
        )
    }
}


export default Login;