import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Redux/User/userSlice'
import catageoryReducer from './Redux/Category/CatageorySlice'
import modalReducer from './Redux/Modal/ModalSlice'
import paymentMethodReducer from './Redux/PaymentMethod/paymentMethodSlice'
import productReducer from './Redux/Products/productSlice'

export const store = configureStore({
    reducer: {
        admin: userReducer,
        catageory: catageoryReducer,
        modal: modalReducer,
        paymentMethod: paymentMethodReducer,
        products: productReducer,
    },
})
