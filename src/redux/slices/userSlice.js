import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: "idle",
    data: [],
    error: null,
};

export const fetchAllUsers = createAsyncThunk("users/fetchAllUsers",async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users"); 
    return response.data

})

const userSlice = createSlice({
    name :"user",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchAllUsers.pending,(state, action)=>{
                state.status = "pending";
        })
        builder.addCase(fetchAllUsers.fulfilled,(state, action)=>{
            state.status = "successfully";
            state.data = action.payload;
        })
        builder.addCase(fetchAllUsers.rejected,(state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }

})

export default userSlice.reducer;
