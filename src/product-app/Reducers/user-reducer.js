import { createSlice } from "@reduxjs/toolkit";

import defaultUser from './../ProfileScreen/defaultUser.json'
import { logoutThunk, registerThunk, profileThunk, getUserThunk } from "../../services/user-thunks";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: [],
        currentUser: defaultUser,
        error: null
    },
    reducers: {
        updateUser(state, action) {
            return {
                ...state,
                ...action.payload
            }
        },
    },
    extraReducers: {

        [registerThunk.fulfilled]: (state, action) => {
            console.log("in fulfilled")
            console.log(action.payload)
            console.log("after fulfilled")
            if (Array.isArray(action.payload)) {
                console.log("array in react")
            }
            else {
                console.log("not array in react")
            }
            state.currentUser = action.payload
            state.loading = false

        },
        [registerThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
            state.loading = true
        },


        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = defaultUser
            localStorage.removeItem('accessToken')
        },

        [profileThunk.fulfilled]: (state, action) => {
            //console.log("in profile fulfilled")
            console.log(action.payload)
            //console.log("after profile fulfilled")
            state.currentUser = action.payload
        },
        [profileThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },

        [getUserThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [getUserThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.loading = false;
        },
        [getUserThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false;
            state.currentUser = defaultUser
        },


    }


});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
