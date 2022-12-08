import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../services/user-thunks";
import './login.css';
import { Grid, Paper, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import * as service from '../../services/user-service.js'
import { updateUser } from "../Reducers/user-reducer";
import NavbarComponent from "../NavbarComponent";
import { Link } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginInput, setLoginInput] = useState({});
    const [dob, setDob] = useState();
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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (loginInput.password !== loginInput.validatePassword) {
            alert("Passwords don't match");

        } else {
            delete loginInput.validatePassword;
            console.log(loginInput)
            console.log(dob)
            let newUser = { ...loginInput, _id: (new Date()).getTime(), dateOfBirth: dob }
            service.register(newUser).then(
                (response) => {
                    navigate('/login');
                }
            )

        }

    }


    return (

        <div>
            <div className="wd-login-container-wrapper">
                <div className='wd-login-container'>
                    <div className='wd-add-product-header'>REGISTER</div>

                    <form onSubmit={handleSubmit}>
                        <Paper style={{ padding: 12 }}>
                            <Grid container alignItems="center" direction="column" spacing={3}>

                                <Grid item xs={6} className='wd-register-item'>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        required
                                        onChange={handleInput}
                                    >
                                        <FormControlLabel name="role" value="Buyer" control={<Radio required />} label="Buyer" />
                                        <FormControlLabel name="role" value="Seller" control={<Radio required />} label="Seller" />
                                    </RadioGroup>

                                </Grid>

                                <Grid item xs={6} className='wd-register-item'>

                                    <TextField
                                        required
                                        fullWidth
                                        name="firstName"
                                        label="firstname"
                                        type="text"
                                        onChange={handleInput}
                                    />
                                </Grid>

                                <Grid item xs={6} className='wd-register-item'>

                                    <TextField
                                        required
                                        fullWidth
                                        name="lastName"
                                        label="lastname"
                                        type="text"
                                        onChange={handleInput}
                                    />
                                </Grid>


                                <Grid item xs={6} className='wd-register-item'>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="Date of birth"
                                            value={dob}
                                            onChange={(newValue) => setDob(newValue)}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>

                                <Grid item xs={6} className='wd-register-item'>

                                    <TextField
                                        required
                                        fullWidth
                                        name="email"
                                        label="email"
                                        type="email"
                                        onChange={handleInput}
                                    />
                                </Grid>

                                <Grid item xs={6} className='wd-register-item'>
                                    <TextField
                                        fullWidth
                                        required
                                        name="userName"
                                        type="text"
                                        label="Username"
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <Grid item xs={6} className='wd-register-item'>

                                    <TextField
                                        required
                                        fullWidth

                                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        onChange={handleInput}
                                    />
                                </Grid>

                                <Grid item xs={6} className='wd-register-item'>

                                    <TextField
                                        required
                                        fullWidth
                                        name="validatePassword"
                                        label="retype password"
                                        type="password"
                                        onChange={handleInput}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <button className='wd-submit-btn'>
                                        REGISTER
                                    </button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </form>

                </div>
            </div>

        </div >
    )
}

export default Register


