import { createSlice } from "@reduxjs/toolkit";
import { findProductsThunkById} from "../../services/product-screen-thunk";

const initialState = {
    productsById: [],
    productsByIdLoading: false
}

const productsByIdSlice = createSlice({
                                        name: 'productsById',
                                        initialState,
                                        extraReducers: {
                                            [findProductsThunkById.fulfilled]:
                                                (state,{payload}) => {
                                                console.log("findProductsThunkById  inside fulfilled");
                                                    state.productsByIdLoading = false
                                                    state.productsById=payload
                                                    console.log(state.productsById)

                                                },

                                            [findProductsThunkById.rejected]:

                                                (state) => {
                                                    console.log(" findProductsThunkById inside rejected");
                                                    state.productsByIdLoading = false
                                                },
                                            [findProductsThunkById.pending]:
                                                (state) => {
                                                    console.log(" findProductsThunkById inside pending");
                                                    state.productsByIdLoading = true
                                                    state.productsById=[]
                                                }

                                        }

                                    });

export default productsByIdSlice.reducer;