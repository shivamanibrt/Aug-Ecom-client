import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catageory: [],
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCatageory: (state, action) => {
            state.catageory = action.payload
        }
    }
})

const { reducer, actions } = categorySlice;
export const { setCatageory } = actions;
export default reducer;