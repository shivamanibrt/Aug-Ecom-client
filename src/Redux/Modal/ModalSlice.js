import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showModal: false,
    productModal: false,
    orderModal: false
}

const modalSlice = createSlice({
    name: 'systemModal',
    initialState,
    reducers: {
        setShowModal: (state) => {
            state.showModal = !state.showModal
        },
        setProductModal: (state) => {
            state.productModal = !state.productModal
        },
        setOrderModal: (state) => {
            state.orderModal = !state.orderModal
        },

    }
})

const { reducer, actions } = modalSlice
export const { setShowModal, setProductModal, setOrderModal } = actions;
export default reducer