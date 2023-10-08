import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    paymentMethods: []
};

const paymentMethodSlice = createSlice({
    name: 'paymentMethod',
    initialState,
    reducers: {
        setPaymentMethods: (state, action) => {
            state.paymentMethods = action.payload
        },
    }
})

const { reducer, actions } = paymentMethodSlice;
export const { setPaymentMethods } = actions;
export default reducer;