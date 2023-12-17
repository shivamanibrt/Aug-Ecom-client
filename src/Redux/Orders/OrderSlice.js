import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orders: [],
    selectedOrder: {},
}

const orderSlice = createSlice({
    name: 'oderModal',
    initialState,
    reducers: {
        setOrders: (state, { payload }) => {
            state.orders = payload
        },
        setSlectedOrder: (state, { payload }) => {
            state.selectedOrder = payload
        },

    }
})

const { reducer, actions } = orderSlice
export const { setOrders, setSlectedOrder } = actions;
export default reducer