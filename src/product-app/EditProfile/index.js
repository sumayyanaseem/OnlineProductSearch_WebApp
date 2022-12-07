import { Grid, Paper, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import NavbarComponent from '../NavbarComponent';
import './index.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as service from '../../services/user-service.js'
import { updateUser } from "../Reducers/user-reducer";



const EditProfileComponent = () => {

    const [dob, setDob] = useState();

    const {currentUser} = useSelector((state)=>state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [editProfileInput, setEditProfileInput] = useState(currentUser);

    const handleInput = (event) => {
        const name = event.target.name;
        const newValue = event.target.value;
        console.log(name, newValue)
        setEditProfileInput(
            {
                ...editProfileInput,
                [name]: newValue
            }
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dob)
        let updatedUser = { ...editProfileInput,dateOfBirth:dob }
        service.updateUser(updatedUser).then((response) => {
            console.log("REGISTED USER", response.data);
            dispatch(updateUser({ currentUser: updatedUser }));
            navigate('/account');
        })
  
        
    }

    return(
        <div>
            <NavbarComponent></NavbarComponent>
            <div className='wd-edit-profile-container'>
                <div className='wd-add-product-header'>Edit Profile</div>

                <form onSubmit={handleSubmit}>
                    <Paper style={{ padding: 16 }}>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    name="firstName"
                                    value={editProfileInput.firstName}
                                    type="text"
                                    label="firstName"
                                    onChange={handleInput}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                    fullWidth
                                    required
                                    name="lastName"
                                    value={editProfileInput.lastName}
                                    type="text"
                                    label="lastName"
                                    onChange={handleInput}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                    fullWidth
                                    required
                                    name="email"
                                    value={editProfileInput.email}
                                    type="text"
                                    label="lastName"
                                    onChange={handleInput}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <LocalizationProvider fullWidth dateAdapter={AdapterDayjs} >
                                        <DatePicker
                                        className='wd-edit-profile-width-100'
                                        fullWidth
                                            label="Date of birth"
                                            value={editProfileInput.dateOfBirth}
                                            onChange={(newValue) => setDob(newValue)}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <button className='wd-submit-btn'>
                                    Submit
                                </button>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
            </div>
        </div >

    );


}

export default EditProfileComponent;