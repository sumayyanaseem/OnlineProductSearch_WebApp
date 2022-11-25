import { createSlice } from "@reduxjs/toolkit";
import { createTuitThunk, deleteTuitThunk, findPropertiesThunk, updateTuitThunk } from "../../services/home-page-thunks";


const initialState = {
    properties: [],
    loading: false
}

const propertiesSlice = createSlice({
    name: 'properties',
    initialState,
    extraReducers: {
        [findPropertiesThunk.pending]:
            (state) => {
                state.loading = true
                state.properties = []
            },
        [findPropertiesThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.properties = payload
            },
        [findPropertiesThunk.rejected]:
            (state) => {
                state.loading = false
            }
        }
});

export const { createTuit, deleteTuit } = propertiesSlice.actions;
export default propertiesSlice.reducer;