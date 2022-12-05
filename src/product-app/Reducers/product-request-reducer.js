import { createSlice } from "@reduxjs/toolkit";
import {findAllProductRequestsThunk, approveProductRequestThunk} from '../../services/product-request-thunks.js'
import { approveProductRequest } from "../../services/product-requests-service.js";


const initialState = {
    productRequests: [],
    loading: false
}

const productRequestsSlice = createSlice({
    name: 'productRequests',
    initialState,
    extraReducers: {
        [findAllProductRequestsThunk.pending]:
            (state) => {
                state.loading = true
                state.productRequests = []
            },
        [findAllProductRequestsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.productRequests = payload
            },
        [findAllProductRequestsThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [approveProductRequestThunk.pending]:
            (state) => {
                state.loading = true
                state.productRequests = []
            },
        [approveProductRequestThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.productRequests = payload
            },
        [approveProductRequestThunk.rejected]:
            (state) => {
                state.loading = false
            }

    }

});

export default productRequestsSlice.reducer;