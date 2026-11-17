import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import reducer from "./ProductSlice"
import axiosInstance from "../../helpers/axiosInstance"
import toast from "react-hot-toast"

const initialState = {
    cartData: ''
}

export const addProductToCart = createAsyncThunk('/cart/addProduct', async (productId) => {
    try {
        const response  = axiosInstance.get(`/cart/add-to-cart/${productId}`);
        toast.dismiss();
        toast.promise(response, {
            success: "Added to cart",
            loading: "adding",
            error: "Cannot add to cart"
        })
        console.log(response);
        const apiRes = await response;
        return apiRes;
    } catch (error) {
        console.log(error);
        
    }
})
export const removeProductFromCart = createAsyncThunk('/cart/removeProduct', async (productId) => {
    try {
        const response  = axiosInstance.get(`/cart/remove-from-cart/${productId}`);
        toast.dismiss();
        toast.promise(response, {
            success: "Removed from cart",
            loading: "removing",
            error: "some error occured"
        })
        console.log(response);
        const apiRes = await response;
        return apiRes;
    } catch (error) {
        console.log(error);
        
    }
})
export const getCart = createAsyncThunk('/cart/getCart', async () => {
    try {
        const response  = axiosInstance.get(`/cart/get`);
        
        toast.promise(response, {
            success: "cart fetched",
            loading: "fetching cart",
            error: "some error occured"
        })
        console.log(response);
        const apiRes = await response;
        return apiRes;
    } catch (error) {
        console.log(error);
        
    }
})
export const clearCart = createAsyncThunk('/cart/clear', async () => {
    try {
        const response  = axiosInstance.get(`/cart/clear`);
        
        toast.promise(response, {
            success: "cart cleared",
            loading: "clearing cart",
            error: "some error occured"
        })
        console.log(response);
        const apiRes = await response;
        return apiRes;
    } catch (error) {
        console.log(error);
        
    }
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducer: {},
    extraReducers: (builder) =>{
        builder.addCase(getCart.fulfilled, (state, action)=>{
            state.cartData = action.payload.data.data;
        })
    }
})

export default cartSlice.reducer;