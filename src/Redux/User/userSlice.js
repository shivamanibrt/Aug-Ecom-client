import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adminUser: {},
}

const userSlice = createSlice({
    name: 'adminUser',
    initialState,
    reducers: {
        setAdminUser: (state, action) => {
            state.adminUser = action.payload
        }
    }
})

const { reducer, actions } = userSlice;
export const { setAdminUser } = actions;
export default reducer;