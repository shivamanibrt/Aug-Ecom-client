import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    paymentMethods: [],
    selectPM: {}
};

const paymentMethodSlice = createSlice({
    name: 'paymentMethod',
    initialState,
    reducers: {
        setPaymentMethods: (state, action) => {
            state.paymentMethods = action.payload
        },
        setSelectedPm: (state, action) => {
            state.selectPM = action.payload
        },
    }
})

const { reducer, actions } = paymentMethodSlice;
export const { setPaymentMethods, setSelectedPm } = actions;
export default reducer;