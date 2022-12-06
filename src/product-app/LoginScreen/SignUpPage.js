import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../services/user-thunks";
import './login.css';
import { useNavigate } from "react-router-dom";
import * as service from '../../services/user-service.js'
import { updateUser } from "../Reducers/user-reducer";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const { currentUser } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegisterBtn = (event) => {
        event.preventDefault();
        console.log("inside handle")
        if (password !== validatePassword) {
            alert("Passwords don't match");

        } else if (!role) {
            alert("Please select one of the roles admin/buyer/seller");
        }
        //setError(null)
        else {
            console.log("inside")
            console.log(username, password)
            const newuser = {
                _id: (new Date()).getTime(),
                userName: username,
                password: password,
                firstName: firstname,
                lastName: lastname,
                email: email,
                role: role
            }

            service.register(newuser).then((response) => { 
                console.log("REGISTED USER", response.data) ;
                dispatch(updateUser({currentUser:response.data}));
                navigate('/');
            })

            // dispatch(registerThunk(newuser))

          
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
                                        id="option1" autoComplete="off"
                                        onClick={() => setRole("Admin")} />
                                    <label className="btn btn-secondary"
                                        htmlFor="option1">ADMIN</label>

                                    <input type="radio" className="btn-check" name="options"
                                        id="option2" autoComplete="off"
                                        onClick={() => setRole("User")} />
                                    <label className="btn btn-secondary"
                                        htmlFor="option2">BUYER</label>

                                    <input type="radio" className="btn-check" name="options"
                                        id="option3" autoComplete="off"
                                        onClick={() => setRole("Seller")} />
                                    <label className="btn btn-secondary"
                                        htmlFor="option3">SELLER</label>
                                </div>
                            </div>


                            <div className="form-group">
                                <input
                                    className="form-control mb-2"
                                    value={firstname}
                                    placeholder="FirstName"
                                    onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control mb-2"
                                    value={lastname}
                                    placeholder="LastName"
                                    onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control mb-2"
                                    value={email}
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control mb-2"
                                    value={username}
                                    placeholder="Username" required
                                    onChange={(e) => setUsername(e.target.value)} />
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
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>


                            <div className="form-group">
                                <input
                                    className="form-control mb-2"
                                    value={validatePassword}
                                    type="password"
                                    placeholder="Retype Password" required
                                    onChange={(e) => setValidatePassword(e.target.value)} />
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
                                <h2>Welcome {currentUser.userName}</h2>
                            }


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register


