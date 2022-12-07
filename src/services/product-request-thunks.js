import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./product-requests-service.js"

export const findAllProductRequestsThunk = createAsyncThunk(
    'product/findAllProductRequests', async () =>
    await service.getAllProductRequests()
)

export const approveProductRequestThunk = createAsyncThunk(
    'product/acceptRequest', async (id) =>
    await service.approveProductRequest(id)
)


export const rejectProductRequestThunk = createAsyncThunk(
    'product/rejectRequest', async (id) =>
    await service.rejectProductRequest(id)
)



