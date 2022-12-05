import { createSlice } from "@reduxjs/toolkit";
import { findCategoriesThunk } from "../../services/categories.thunks";

const initialState = {
    categories: [],
    loading: false
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: {
        [findCategoriesThunk.pending]:
            (state) => {
                state.loading = true
                state.categories = []
            },
        [findCategoriesThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.categories = payload
            },
        [findCategoriesThunk.rejected]:
            (state) => {
                state.loading = false
            }

    }

});

export default categoriesSlice.reducer;