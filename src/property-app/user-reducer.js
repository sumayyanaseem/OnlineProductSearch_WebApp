import { createSlice } from "@reduxjs/toolkit";
import user from './ProfileScreen/user.json'
import {logoutThunk, loginThunk, registerThunk} from "./../property-app/user-thunks.js";
import {findPropertiesThunk} from "../services/home-page-thunks";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading:false,
        user:[],
        currentUser: null,
        error: null
    },
    reducers: {
        
    },
     extraReducers: {

                                      [loginThunk.fulfilled]: (state, action) => {
                                          state.currentUser = action.payload
                                      },
                                      [loginThunk.rejected]: (state, action) => {
                                          state.error = action.payload
                                          state.currentUser = null
                                      },
                                      [registerThunk.fulfilled]: (state, action) => {
                                          state.currentUser = action.payload
                                          state.loading = false

                                      },
                                      [registerThunk.rejected]: (state, action) => {
                                          state.error = action.payload
                                          state.currentUser = null
                                          state.loading = true
                                      },

                                     [findPropertiesThunk.pending]:
                                         (state) => {
                                             state.loading = true
                                             state.user = []
                                         },

                                      [logoutThunk.fulfilled]: (state, action) => {
                                          state.currentUser = null
                                      },


                                  }


});


export default userSlice.reducer;
