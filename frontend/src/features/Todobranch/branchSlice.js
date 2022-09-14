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

export const delete_branch = createAsyncThunk('dash/deletedtotoBranch', async(userdata, thunkAPI) => {
    try {
        return await branch.delete_Branch(userdata);
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
        },
        deleteBranch: (state, action) => {
            const { id } = action.payload
            console.log(id)
            const branchtodelete = state.projects.map((project) => console.log(project._id))
            if(branchtodelete){
                // console.log('reached')
                state.projects.splice(state.projects.findIndex((project) => project._id === id),1);
            }
          },
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

        //delete branch 
         //get user projects
         builder.addCase(delete_branch.pending, (state) => {
            state.loading=true
        })
        builder.addCase(delete_branch.fulfilled, (state, action) => {
            state.loading=false
            state.error=false
            state.success=true
            state.load=action.payload
        })
        builder.addCase(delete_branch.rejected, (state, action) => {
            state.loading=false
            state.error=true
            state.success=false
            state.load=action.payload
        })
    }
})

export const { reset, deleteBranch } = branchSlice.actions
export default branchSlice.reducer
