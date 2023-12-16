import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orders: [],
    selectedOder: {},

}

const orderSlice = createSlice({
    name: 'oderModal',
    initialState,
    reducers: {
        setOrders: (state, { payload }) => {
            state.orders = payload
        },
        setSlectedOder: (state, { payload }) => {
            state.selectedOder = payload
        },

    }
})

const { reducer, actions } = orderSlice
export const { setOrders, setSlectedOder } = actions;
export default reducer