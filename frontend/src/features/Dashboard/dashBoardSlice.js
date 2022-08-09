import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dashboard from './dashboardService';

const initialState = {
    loading:false,
    Error:false,
    success:false,
    load:""

}

export const getAuthUserDashboard = createAsyncThunk('dash/dashboard-auth', async(thunkAPI) => {
    try {
        return await dashboard.getDetails();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})




const dashboardSlice = createSlice({
    name:"dashboard",
    initialState,
    reducers:{
        reset:(state) => {
            state.loading=false
            state.Error=false
            state.success=false
            state.load=""
        } 
    },
    extraReducers:(builder) => {
        builder.addCase(getAuthUserDashboard.pending, (state) => {
            state.loading=true
        })
        builder.addCase(getAuthUserDashboard.fulfilled, (state, action) => {
            state.loading=false
            state.Error=false
            state.success=true
            state.load=action.payload
        })
        builder.addCase(getAuthUserDashboard.rejected, (state, action) => {
            state.loading=false
            state.Error=true
            state.success=false
            state.load=action.payload
        })
    }
})

export const { reset } = dashboardSlice.actions
export default dashboardSlice.reducer