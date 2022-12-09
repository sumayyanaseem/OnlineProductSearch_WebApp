import { createSlice } from "@reduxjs/toolkit";
import { createOrderThunk, getOrdersThunk } from "../../services/order-thunks";

const initialState = {
    orders: [],
    loading: false
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    extraReducers: {
        [getOrdersThunk.pending]:
            (state) => {
                state.loading = true
                state.orders = []
            },
        [getOrdersThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.orders = payload
            },
        [getOrdersThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [createOrderThunk.fulfilled]:
            (state, { payload }) => {
                state.orders.push(payload)
            },

    }

});

export default ordersSlice.reducer;