import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './AuthService'

const initialState ={ 
    loading:false,
    isError:false,
    isSuccess:false,
    msg:"",
}

export const registerUser = createAsyncThunk('auth/register', async(user, thunkAPI) => {
    try {
       return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const LoginUser = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try {
       return await authService.Login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state) => {
            state.isError=false
            state.loading=false
            state.isSuccess=false
            state.msg=""
        }
    },
    extraReducers:(builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading=true
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading=false
            state.isSuccess=true
            state.msg=action.payload
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading=false
            state.isError=true
            state.isSuccess=false
            state.msg=action.payload
        })
        //Login Builder case
        builder.addCase(LoginUser.pending, (state) => {
            state.loading=true
        })
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.loading=false
            state.isError=false
            state.isSuccess=true
            state.msg=action.payload
        })
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isSuccess=false
            state.msg=action.payload
            state.isError=true
            state.loading=false
        })
    }
})

export const { reset }= authSlice.actions
export default authSlice.reducer