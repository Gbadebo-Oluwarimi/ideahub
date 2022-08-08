import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import forgotService from './forgotService'

const initialState ={ 
    loading:false,
    isError:false,
    isSuccess:false,
    msg:"",
}



export const ForgotPassword = createAsyncThunk('forgot/forgot-password', async(email, thunkAPI) => {
    try {
        return await forgotService.forgotPassword(email);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const Resetpassword = createAsyncThunk('forgot/reset-password', async(userdata, thunkAPI) => {
    try {
        return await forgotService.resetPassword(userdata);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const forgotSlice = createSlice({
    name:'forgot-password',
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
        builder.addCase(ForgotPassword.pending, (state) => {
            state.loading = true
        })
        builder.addCase(ForgotPassword.fulfilled, (state, action) => {
            state.loading = false
            state.isError = false
            state.isSuccess = true
            state.msg = action.payload
        })
        builder.addCase(ForgotPassword.rejected, (state, action) => {
            state.loading = false
            state.isError = true
            state.isSuccess = false
            state.msg = action.payload
        })

        // reset-password
        builder.addCase(Resetpassword.pending, (state) => {
            state.loading = true
        })
        builder.addCase(Resetpassword.fulfilled, (state, action) => {
            state.loading=false
            state.isError=false
            state.isSuccess=true
            state.msg=action.payload
        })
        builder.addCase(Resetpassword.rejected, (state, action) => {
            state.loading=false
            state.isError=true
            state.isSuccess=false
            state.msg=action.payload
        })
    }
})

export const { reset } = forgotSlice.actions
export default forgotSlice.reducer