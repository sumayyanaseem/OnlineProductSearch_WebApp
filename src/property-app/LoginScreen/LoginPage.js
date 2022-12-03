import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./../user-thunks";
import { Link } from "react-router-dom";
import './login.css'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        setError(null)
        const loginUser = {username, password}
        dispatch(loginThunk(loginUser))
    }
    return(
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
                        value={username}
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
                <div className="text-center">Don't have an account? <Link to="/register">Register</Link></div>
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

export default Login


/*

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="modal-box">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary btn-lg show-modal" data-toggle="modal" data-target="#myModal">
                  view modal
                </button>

                <!-- Modal -->
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content clearfix">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <div class="modal-content clearfix">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <div class="modal-body">
                                    <div class="modal-icon">
                                        <i class="fas fa-desktop"></i>
                                    </div>
                                    <h3 class="title">Hello User! <span>Welcome back :)</span></h3>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Username" required="">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password" required="">
                                    </div>
                                    <button class="btn">Free Login</button>
                                </div>
                                <div class="modal-footer">
                                    <ul>
                                        <li><a href="">Forgot Password ?</a></li>
                                        <li><a href="">Sign Up</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 */
