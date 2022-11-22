import { createSlice } from "@reduxjs/toolkit";
import user from './ProfileScreen/user.json'

const userSlice = createSlice({
    name: 'user',
    initialState: user,
    reducers: {
        updateUser(state, action) {
            return {
                ...state,
                ...action.payload
            }
        },
    }
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
