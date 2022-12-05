import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./product-screen-service"

export const findProductsThunkById = createAsyncThunk(
    'product/findProductById', async (pid) =>
        await service.getProductById(pid)
)

export const findProductsByCategory = createAsyncThunk(
    'search/findProductsByCategory', async (category) =>
        await service.getProductsByCategory(category)
)
