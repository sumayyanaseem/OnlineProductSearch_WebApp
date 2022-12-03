/*import React from "react";

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
                <h6>User {name} successfully registered!!</h6>
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


            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
        <form>
            <div class="flex-container">

                <div >
                <input type="radio" value="Customer"
                       name="radio-genre" id="radio-comedy"/>
                <label htmlFor="radio-comedy">Customer</label><br/>
                </div>

                <div >
                <input type="radio" value="Property Owner"
                       name="radio-genre" id="radio-drama"/>
                <label htmlFor="radio-drama">Property Owner</label><br/>
                </div>
                <br/>

            </div>
                <div className="input-container">
                <label className="label">Name</label>
                <input onChange={handleName} className="input"
                       value={name} type="text" />
                </div>

                <div className="input-container">
                <label className="label">Email</label>
                <input onChange={handleEmail}
                       value={email} type="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
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

export default SignUpPage; */

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./../user-thunks";
import './login.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
    //const [error, setError] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const {currentUser,loading} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegisterBtn = () => {
        console.log("inside handle")
        if (password !== validatePassword) {
            //setError('Passwords must match')
            //return
            alert("Passwords don't match");

        }
        //setError(null)
        else {
            console.log("inside")
            console.log(username,password)
            const newuser = {
                _id : "123",
                userName:username,
                password: password,
                firstName:firstname,
                lastName:lastname,
                email:email,
                role:role
            }
            dispatch(registerThunk(newuser))
            navigate('/')
        }
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">

                    <div className="form-container">
                        <div className="form-icon"><i className="fa fa-user"></i></div>
                        <h3 className="title">Register</h3>
                        <form className="form-horizontal">

                            <div className="form-group">
                                <div className="btn-group w-100">
                                    <input type="radio" className="btn-check" name="options"
                                           id="option1" autoComplete="off" onClick={() => setRole("admin")}/>
                                    <label className="btn btn-secondary"
                                           htmlFor="option1">ADMIN</label>

                                    <input type="radio" className="btn-check" name="options"
                                           id="option2" autoComplete="off" onClick={() => setRole("buyer")}/>
                                    <label className="btn btn-secondary"
                                           htmlFor="option2">BUYER</label>

                                    <input type="radio" className="btn-check" name="options"
                                           id="option3" autoComplete="off" onClick={() => setRole("seller")}/>
                                    <label className="btn btn-secondary"
                                           htmlFor="option3">SELLER</label>
                                </div>
                            </div>


                            <div className="form-group">
                                <input
                                    className="form-control mb-2"
                                    value={firstname}
                                    placeholder="FirstName"
                                    onChange={(e) => setFirstName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control mb-2"
                                    value={lastname}
                                    placeholder="LastName"
                                    onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control mb-2"
                                    value={email}
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control mb-2"
                                    value={username}
                                    placeholder="Username" required
                                    onChange={(e) => setUsername(e.target.value)}/>
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control mb-2 validate"
                                    value={password}
                                    type="password"
                                    placeholder="Password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}/>
                            </div>



                            <div className="form-group">
                                <input
                                    className="form-control mb-2"
                                    value={validatePassword}
                                    type="password"
                                    placeholder="Retype Password" required
                                    onChange={(e) => setValidatePassword(e.target.value)}/>
                            </div>



                            <div className="form-group">
                                <button
                                    onClick={handleRegisterBtn}
                                    className="btn btn-primary w-100">
                                    Register
                                </button>
                            </div>
                            {
                                currentUser &&
                                <h2>Welcome {currentUser.username}</h2>
                            }








                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register


