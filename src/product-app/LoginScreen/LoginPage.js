import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Paper, TextField } from '@mui/material';
import './login.css'
import { useNavigate } from "react-router-dom";
import * as loginService from '../../services/user-service.js'
import { getUserThunk } from "../../services/user-thunks";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState(false);

    const [loginInput, setLoginInput] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        loginService.login(loginInput).then((response) => {
            setLoginError(false);
            const { accessToken } = response.data;
            localStorage.setItem("accessToken", accessToken)
            dispatch(getUserThunk());
            navigate('/');
        }).catch((e) => {
            setLoginError(true)
        })

    }

    const handleInput = (event) => {
        const name = event.target.name;
        const newValue = event.target.value;
        console.log(name, newValue)
        setLoginInput(
            {
                ...loginInput,
                [name]: newValue
            }
        );
    }

    return (

        <div>
            <div className="wd-login-container-wrapper">
                <div className='wd-login-container'>
                    <div className='wd-add-product-header'> LOGIN</div>

                    <form onSubmit={handleSubmit}>
                        <Paper style={{ padding: 12 }}>
                            <Grid container alignItems="center" direction="column" spacing={3}>
                                <Grid item xs={6} className='wd-login-item'>
                                    {!loginError &&
                                        <TextField
                                            fullWidth
                                            required
                                            name="userName"
                                            type="text"
                                            label="Username"
                                            onChange={handleInput}
                                        />
                                    }

                                    {loginError &&
                                        <TextField
                                            error
                                            fullWidth
                                            required
                                            name="userName"
                                            type="text"
                                            label="Invalid username"
                                            onChange={handleInput}
                                            defaultValue={loginInput.userName}
                                        />
                                    }

                                </Grid>
                                <Grid item xs={6} className='wd-login-item'>
                                    {!loginError &&
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            onChange={handleInput}
                                        />
                                    }

                                    {loginError &&
                                        <TextField
                                            error
                                            fullWidth
                                            name="password"
                                            label=" Invalid password"
                                            type="password"
                                            onChange={handleInput}
                                            defaultValue={loginInput.password}
                                        />
                                    }

                                </Grid>

                                <Grid item xs={12}>
                                    <button className='wd-submit-btn'>
                                        Login
                                    </button>
                                </Grid>
                            </Grid>
                            <div className="text-center">Don't have an account? <Link
                                to="/register">Register</Link></div>
                        </Paper>
                    </form>

                </div>
            </div>

        </div >

    )
}

export default Login

