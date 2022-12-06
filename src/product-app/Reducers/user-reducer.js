import { createSlice } from "@reduxjs/toolkit";

import user from './../ProfileScreen/user.json'
import { logoutThunk, loginThunk, registerThunk, profileThunk } from "../../services/user-thunks";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: [],
        currentUser: null,
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

        [loginThunk.fulfilled]: (state, action) => {
            console.log("in login fulfilled")
            console.log(action.payload)
            console.log("after login fulfilled")
            if (Array.isArray(action.payload)) {
                console.log("array in react")
            }
            else {
                console.log("not array in react")
            }
            state.currentUser = action.payload
            state.loading = false
        },
        [loginThunk.rejected]: (state, action) => {
            console.log("in login rejected")
            state.error = action.payload
            state.currentUser = null
            state.loading = true
            console.log("after login rejected")
        },
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
            state.currentUser = null
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


    }


});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
