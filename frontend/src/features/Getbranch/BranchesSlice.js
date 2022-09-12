import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import branches from './BranchesService'

const initialState = {
    todobranches:[],
    loading:false,
    error:null,
    success:null
}

export const get_all_branches = createAsyncThunk('get_branch/branch',async(_, thunkAPI) => {
    try {
        return await branches.getbranches();
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
} )

const GetAllBranchSlice = createSlice({
    name:"all_branches",
    initialState,
    reducers:{
        resety:(state) => {
            state.todobranches=[]
            state.error=null
            state.loading=false
            state.success=null
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(get_all_branches.pending, (state) => {
            state.loading=true
        })
        builder.addCase(get_all_branches.fulfilled, (state, action) => {
            state.loading=false
            state.error=false
            state.success=true
            state.todobranches = action.payload
        })
        builder.addCase(get_all_branches.rejected, (state, action) => {
            state.loading=false
            state.error=action.payload
            state.success=false
            state.load=action.payload
        })
    }

})

export const { resety } = GetAllBranchSlice.actions
export default GetAllBranchSlice.reducer