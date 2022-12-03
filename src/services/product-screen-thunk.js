import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./product-screen-service"

export const findProductsThunkById = createAsyncThunk(
    'product/findProductById', async (pid) =>
        await service.getProductById(pid)
)
