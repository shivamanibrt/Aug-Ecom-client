import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showModal: false
}

const modalSlice = createSlice({
    name: 'systemModal',
    initialState,
    reducers: {
        setShowModal: (state) => {
            state.showModal = !state.showModal
        }
    }
})

const { reducer, actions } = modalSlice
export const { setShowModal } = actions;
export default reducer