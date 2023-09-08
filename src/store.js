import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Redux/User/userSlice'

export const store = configureStore({
    reducer: {
        admin: userReducer
    },
})