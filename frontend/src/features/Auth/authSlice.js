import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './AuthService'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

const signedInUser = cookies.get('connect.sid', {})
const initialState ={
    User:signedInUser ? signedInUser : null,
    signuperror:"",
    loading:false,
    isError:false,
    isSuccess:false,
    msg:"",
    registereduser:"",
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
export const Logoutuser = createAsyncThunk('auth/logout', async(thunkAPI) => {
    try {
        return await authService.Logout();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        resetState:(state) => {
            state.User=null
            state.isError=false
            state.loading=false
            state.isSuccess=false
            state.registereduser=""
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
            state.isError=false
            state.msg=action.payload
            state.signuperror=null
            state.registereduser=action.payload.name
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading=false
            state.isSuccess=false
            // state.isError=true
            state.signuperror=action.payload
        })
        //Login Builder case
        builder.addCase(LoginUser.pending, (state) => {
            state.loading=true
        })
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.loading=false
            state.isError=false
            state.isSuccess=true
            state.User=action.payload
        })
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isSuccess=false
            state.msg=action.payload
            state.isError=true
            state.loading=false
            state.User=null
        })
        builder.addCase(Logoutuser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(Logoutuser.fulfilled, (state, action) => {
            state.loading = false
            state.isSuccess=true
            state.isError=false
            state.msg=action.payload
            state.User=null
        })
        builder.addCase(Logoutuser.rejected, (state, action) => {
            state.loading = false
            state.isSuccess=false
            state.isError=true
            state.msg=action.payload
        })

    }
})

export const { resetState }= authSlice.actions
export default authSlice.reducer