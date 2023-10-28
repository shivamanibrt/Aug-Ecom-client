import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productList: [],
    selectedProduct: {},
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.productList = action.payload
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        },
    }
})

const { reducer, actions } = productSlice;
export const { setProducts, setSelectedProduct } = actions;
export default reducer;