import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catageory: [],
}

const userSlice = createSlice({
    name: 'adminUser',
    initialState,
    reducers: {
        setCatageory: (state, { payload }) => {
            state.catageory = payload
        }
    }
})

const { reducer, actions } = userSlice;
export const { setCatageory } = actions;
export default reducer;