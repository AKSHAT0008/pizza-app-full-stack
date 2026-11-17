import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    orderData: null
}

export const createOrder = createAsyncThunk('/order/create', async (details) => {
    try {
        const response  = axiosInstance.post(`/order/create`, details);
        console.log(response);
        
        toast.dismiss();
        toast.promise(response, {
            success: "Order placed successfully",
            loading: "placing your order",
            error: "Cannot place order"
        })
        console.log(response);
        const apiRes = await response;
        return apiRes;
    } catch (error) {
        console.log(error);
        
    }
})

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createOrder.fulfilled, (state, action)=>{
            state.orderData = action?.payload?.data?.data;
        })
    }
})

export default orderSlice.reducer;