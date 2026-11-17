import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
    role: localStorage.getItem('role') || '',
    data: JSON.parse(localStorage.getItem('data')) || {},
}

export const createAccount = createAsyncThunk('/auth/createAccount', async (data) => {
    console.log("incoming data", data);
    try {
        const response =  axiosInstance.post('/users', data);

        toast.promise(response, {
            success: "Account created successfully!",
            loading: "Registering...",
            error: "Mobile or email already exist!"
        })
        console.log(response);
        const apiRes = await response;
        return apiRes;
    } catch (error) {
        console.log(error);
    }

})
export const login = createAsyncThunk('/auth/login', async (data) => {
    console.log("incoming data", data);
    try {
        const response =  axiosInstance.post('/login', data);

        toast.promise(response, {
            success: "Account logged-in successfully!",
            loading: "logging...",
            error: "email and password combination does not exist"
        })
        console.log(response);
        const apiRes = await response;
        return apiRes;
    } catch (error) {
        console.log(error);
    }

})
export const logout = createAsyncThunk('/auth/logout', async () => {
    // console.log("incoming data",);
    try {
        const response =  axiosInstance.post('/logout');

        toast.promise(response, {
            success: "Account logged-out successfully!",
            loading: "logging out...",
            error: "some error occured"
        })
        console.log(response);
        const apiRes = await response;
        return apiRes;
    } catch (error) {
        console.log(error);
    }

})

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(login.fulfilled, (state,action)=>{
            state.isLoggedIn = true,
            state.data = action.payload.data?.data,
            state.role = action.payload.data?.data?.userRole

            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('role', action.payload.data.data.userRole);
            localStorage.setItem('data', JSON.stringify(action.payload.data.data));

        })
        builder.addCase(logout.fulfilled, (state)=>{
            state.isLoggedIn = false,
            localStorage.setItem('isLoggedIn', false);
        })
    }
})

export default AuthSlice.reducer;