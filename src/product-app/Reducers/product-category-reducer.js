import { createSlice } from "@reduxjs/toolkit";
import {findProductsByCategory} from "../../services/product-screen-thunk";

const initialState = {
    productsByCategory: [],
    productsByCategoryLoading: false
}

const productsByCategorySlice = createSlice({
                                      name: 'productsByCategory',
                                      initialState,
                                      extraReducers: {
                                          [findProductsByCategory.pending]:
                                              (state) => {
                                              console.log("in pending")
                                                  state.productsByCategoryLoading = true
                                                  state.productsByCategory = []
                                              },
                                          [findProductsByCategory.fulfilled]:
                                              (state, { payload }) => {
                                                  console.log("in fullfilled")
                                                  state.productsByCategoryLoading = false
                                                  state.productsByCategory = payload
                                                  console.log("payload "+state.productsByCategory)
                                              },
                                          [findProductsByCategory.rejected]:
                                              (state) => {
                                                  console.log("in rejected")
                                                  state.productsByCategoryLoading = false
                                              }

                                      }

                                  });

export default productsByCategorySlice.reducer;