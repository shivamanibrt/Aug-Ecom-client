import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showModal: false,
    productModal: false
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
        }
    }
})

const { reducer, actions } = modalSlice
export const { setShowModal, setProductModal } = actions;
export default reducer