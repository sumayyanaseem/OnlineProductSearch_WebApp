import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./address-service"

export const addUserAddressThunk = createAsyncThunk(
    'user/addUserAddress', async (addAddressRequest) =>
    await service.addUserAddress(addAddressRequest)
)

export const findUserAddressesThunk = createAsyncThunk(
    'user/findUserAddresses', async () =>
    await service.findUserAddresses()
)