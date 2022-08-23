import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import branch from './branchService';

const initialState = {
    projects:[],
    loading:false,
    error:false,
    success:false,
    load:null

}

export const getAllUserProject = createAsyncThunk('/user-projects', async(thunkAPI) => {
    try {
        return await branch.getDetails();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



// create todo branch 
export const createTodoBranch = createAsyncThunk('dash/createtodoBranch', async(userdata, thunkAPI) => {
    try {
        return await branch.createBranch(userdata);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const branchSlice = createSlice({
    name:'branch',
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
        builder.addCase(createTodoBranch.pending, (state) => {
            state.loading=true
        })
        builder.addCase(createTodoBranch.fulfilled, (state, action) => {
            state.loading=false
            state.error=false
            state.success=true
            state.projects.push(action.payload)
        })
        builder.addCase(createTodoBranch.rejected, (state, action) => {
            state.loading=false
            state.error=true
            state.success=false
            state.load=action.payload
        })

        //get user projects
        builder.addCase(getAllUserProject.pending, (state) => {
            state.loading=true
        })
        builder.addCase(getAllUserProject.fulfilled, (state, action) => {
            state.loading=false
            state.error=false
            state.success=true
            state.projects = action.payload
        })
        builder.addCase(getAllUserProject.rejected, (state, action) => {
            state.loading=false
            state.error=true
            state.success=false
            state.load=action.payload
        })
    }
})

export const { reset } = branchSlice.actions
export default branchSlice.reducer
