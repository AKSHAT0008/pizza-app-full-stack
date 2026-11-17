import {configureStore, createSlice} from '@reduxjs/toolkit'
import AuthSliceReducer from './slices/authSlice'
import productSliceReducer from './slices/ProductSlice'
import cartSliceReducer from './slices/CartSlice'
import orderSliceReducer from './slices/orderSlice'
export const store = configureStore({
    reducer:{
        auth: AuthSliceReducer,
        product: productSliceReducer,
        cart: cartSliceReducer,
        order: orderSliceReducer
    }
})