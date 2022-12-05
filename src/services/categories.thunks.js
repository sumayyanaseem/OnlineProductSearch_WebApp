import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./categories-service"

export const findCategoriesThunk = createAsyncThunk(
    'products/findCategories', async (userID) =>
    await service.getCategories(userID)
)