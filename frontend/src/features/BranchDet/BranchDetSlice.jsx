import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import branchDet from './BranchDetService';

const initialState = {
    loading:false,
    error:false,
    success:false,
    load:null

}

// create todo branch 
export const checkBranch = createAsyncThunk('branch/checkBranch', async(userdata, thunkAPI) => {
    try {
        return await branchDet.check_branch(userdata);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const checkBranchSlice = createSlice({
    name:'branchDet',
    initialState,
    reducers:{
        reset:(state) => {
            state.loading=false
            state.error=false
            state.success=false
            state.load=null
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(checkBranch.pending, (state) => {
            state.loading=true
        })
        builder.addCase(checkBranch.fulfilled, (state, action) => {
            state.loading=false
            state.error=false
            state.success=true
            state.load=action.payload
        })
        builder.addCase(checkBranch.rejected, (state, action) => {
            state.loading=false
            state.error=true
            state.success=false
            state.load=action.payload
        })
    }
})

export const { reset } = checkBranchSlice.actions
export default checkBranchSlice.reducer
