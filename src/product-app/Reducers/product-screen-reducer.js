import { createSlice } from "@reduxjs/toolkit";
import { findProductsThunkById } from "../../services/product-screen-thunk";

const initialState = {
    productById: null,
    productByIdLoading: false
}

const productByIdSlice = createSlice({
    name: 'productById',
    initialState,
    extraReducers: {
        [findProductsThunkById.fulfilled]:
            (state, { payload }) => {
                state.productByIdLoading = false
                state.productById = payload
            },

        [findProductsThunkById.rejected]:

            (state) => {
                state.productByIdLoading = false
            },
        [findProductsThunkById.pending]:
            (state) => {
                state.productByIdLoading = true
            }

    }

});

export default productByIdSlice.reducer;