import { Grid, Paper, TextField } from '@mui/material';
import './index.css'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAddressThunk } from '../../../../services/address-thunks';

const AddAddressComponent = ({ setShowAddAddressForm }) => {

    const [addressFormInput, setAddressFormInput] = useState({});
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);

    const handleCancel = (event) => {
        setShowAddAddressForm(false);
    }

    const handleSave = (event) => {
        event.preventDefault();
        dispatch(addUserAddressThunk({ ...addressFormInput, userName: currentUser.userName }));
        setShowAddAddressForm(false);
    }

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        setAddressFormInput({ ...addressFormInput, [name]: value })
    }


    return (
        <form onSubmit={handleSave}>
            <Paper style={{ padding: 16, backgroundColor: '#F5F5F5' }}>
                    <i className="fa fa-x float-end wd-lightgrey wd-address-cancel-btn"
                        onClick={handleCancel}></i>
                <div className='wd-address-contact-details-header'>CONTACT DETAILS</div>

                <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            id="name"
                            label="Name"
                            type="text"
                            name="name"
                            required
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Phone Number"
                            type="tel"
                            required
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
                <div className='wd-address-address-header'>ADDRESS</div>

                <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            id="address1"
                            name="address1"
                            label="Street Address 1"
                            type="text"
                            required
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Street Address 2"
                            type="text"
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="city"
                            name="city"
                            label="City"
                            required
                            type="text"
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="state"
                            name="state"
                            label="State"
                            required
                            type="text"
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="country"
                            name="country"
                            label="Country"
                            required
                            type="text"
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="zipCode"
                            name="zipCode"
                            label="Zip Code"
                            required
                            type="text"
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <button type='submit' className='wd-address-save-btn' onClick={handleSave}>Save</button>
                    </Grid>
                </Grid>
            </Paper>
        </form>
    )
}

export default AddAddressComponent;