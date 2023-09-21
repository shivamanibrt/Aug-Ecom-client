import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Redux/User/userSlice'
import catageoryReducer from './Redux/Category/CatageorySlice'
import modalReducer from './Redux/Modal/ModalSlice'

export const store = configureStore({
    reducer: {
        admin: userReducer,
        catageory: catageoryReducer,
        modal: modalReducer
    },
})