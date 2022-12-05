import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../services/user-thunks";
import {Link} from "react-router-dom";
import './login.css'
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLoginBtn = () => {
        setError(null)
        //const loginUser = {userName, password}

        const newuser = {
            userName: userName,
            password: password,
        }
        dispatch(loginThunk(newuser))

        navigate('/')

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">

                    <div className="form-container">
                        <div className="form-icon"><i className="fa fa-user"></i></div>
                        <h3 className="title">Login</h3>
                        <form className="form-horizontal">

                            {
                                error &&
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            }
                            <div className="form-group">
                                <input
                                    className="form-control mb-2"
                                    value={userName}
                                    placeholder="Username"
                                    onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control mb-2"
                                    value={password}
                                    placeholder="Password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}/>
                            </div>


                            <div className="form-group">
                                <button
                                    onClick={handleLoginBtn}
                                    className="btn btn-primary w-100">
                                    Login
                                </button>
                            </div>
                            {
                                currentUser &&
                                <h2>Welcome {currentUser.userName}</h2>
                            }
                            <div className="text-center">Don't have an account? <Link
                                to="/register">Register</Link></div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login

