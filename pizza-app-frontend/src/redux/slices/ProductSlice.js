import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    productData: []
}

console.log("data is: " , initialState.productData);

export const getAllProducts = createAsyncThunk('/product/getAllProduct', async (data) => {
    // console.log("incoming data",);
    try {
        const response =  axiosInstance.get('/product');
        console.log(response);
        

        toast.promise(response, {
            success: "All products found",
            loading: "loading",
            error: "some error occured"
        })
        console.log(response);
        const apiRes = await response;
        return apiRes;
    } catch (error) {
        console.log(error);
    }

})
export const getProductDetail = createAsyncThunk('/product/getProduct', async (id) => {
    // console.log("incoming data",);
    try {
        const response =  axiosInstance.get(`/product/${id}`);
        console.log(response);
        

        toast.promise(response, {
            success: "product found",
            loading: "loading",
            error: "some error occured"
        })
        console.log(response);
        const apiRes = await response;
        return apiRes;
    } catch (error) {
        console.log(error);
    }

})

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getAllProducts.fulfilled, (state, action)=>{
            state.productData = action.payload.data?.res;
            localStorage.setItem('productData', JSON.stringify(action.payload.data.res) );
        })
        
    }
})

export default productSlice.reducer;