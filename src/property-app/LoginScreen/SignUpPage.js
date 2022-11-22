import React from "react";

import "./login.css";

import { useState } from 'react';

function SignUpPage() {

    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h4>User {name} successfully registered!!</h4>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h4>Please enter all the fields</h4>
            </div>
        );
    };

    return (
        <div className="signup-form">
        <div className="form">
            <div>
                <h3>User Registration</h3>
            </div>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                {/* Labels and inputs for form data */}

                <div className="input-container">
                <label className="label">Name</label>
                <input onChange={handleName} className="input"
                       value={name} type="text" />
                </div>

                <div className="input-container">
                <label className="label">Email</label>
                <input onChange={handleEmail}
                       value={email} type="email" />
                </div>

                <div className="input-container">
                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                       value={password} type="password" />
                </div>

                <div className="button-container">
                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default SignUpPage;
