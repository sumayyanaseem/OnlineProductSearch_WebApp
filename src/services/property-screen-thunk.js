import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./property-screen-service"

export const findPropertiesThunkById = createAsyncThunk(
    'properties/findPropertiesById', async (pid) =>
        await service.getPropertyById(pid)
)

