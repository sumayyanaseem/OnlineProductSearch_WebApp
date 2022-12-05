import { createSlice } from "@reduxjs/toolkit";
import { findProductsThunkById } from "../../services/product-screen-thunk";
import { findProductsThunk } from "../../services/home-page-thunks";

const initialState = {
    products: [],
    loading: false
}

const productsSlice = createSlice({
                                      name: 'products',
                                      initialState,
                                      extraReducers: {
                                          [findProductsThunk.pending]:
                                              (state) => {
                                                  state.loading = true
                                                  state.products = []
                                              },
                                          [findProductsThunk.fulfilled]:
                                              (state, { payload }) => {
                                                  state.loading = false
                                                  state.products = payload
                                              },
                                          [findProductsThunk.rejected]:
                                              (state) => {
                                                  state.loading = false
                                              }

                                      }

                                  });

export default productsSlice.reducer;