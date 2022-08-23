import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getUserService from './getUserService';

const initialState = {
    loading:false,
    Error:false,
    success:false,
    User:null,

}

export const getAuthUserInfo = createAsyncThunk('get/UserInfo', async(thunkAPI) => {
    try {
        return await getUserService.getDetails();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const UserInfoSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
        reset:(state) => {
            state.loading=false
            state.Error=false
            state.success=false
            state.User=null
        } 
    },
    extraReducers:(builder) => {
        builder.addCase(getAuthUserInfo.pending, (state) => {
            state.loading=true
        })
        builder.addCase(getAuthUserInfo.fulfilled, (state, action) => {
            state.loading=false
            state.Error=false
            state.success=true
            state.User=action.payload
        })
        builder.addCase(getAuthUserInfo.rejected, (state, action) => {
            state.loading=false
            state.Error=true
            state.success=false
            state.User=action.payload
        })

    }
})

export const { reset } = UserInfoSlice.actions
export default UserInfoSlice.reducer