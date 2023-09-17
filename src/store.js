import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Redux/User/userSlice'
import catageoryReducer from './Redux/Category/CatageorySlice'

export const store = configureStore({
    reducer: {
        admin: userReducer,
        catageory: catageoryReducer
    },
})