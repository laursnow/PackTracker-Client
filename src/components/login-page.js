import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';
import LoginForm from './forms/login-form'


export class Login extends React.Component {
    render() {
        return (
            <div className="item-auth">
                <main>
                    <h2>Login</h2>
                    <LoginForm />
                <Link to="/" className="up">Return to main</Link>
                </main>
            </div>
        )
    }
}


export default Login;