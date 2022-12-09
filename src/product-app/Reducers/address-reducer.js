import { createSlice } from "@reduxjs/toolkit";
import { addUserAddressThunk, findUserAddressesThunk } from "../../services/address-thunks";

const initialState = {
    userAddresses: [],
    loading: false
}

const userAddressesSlice = createSlice({
    name: 'userAddresses',
    initialState,
    extraReducers: {
        [findUserAddressesThunk.pending]:
            (state) => {
                state.loading = true
                state.userAddresses = []
            },
        [findUserAddressesThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.userAddresses = payload
            },
        [findUserAddressesThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [addUserAddressThunk.fulfilled]:
            (state, { payload }) => {
                state.userAddresses.push(payload)
            },

    }

});

export default userAddressesSlice.reducer;