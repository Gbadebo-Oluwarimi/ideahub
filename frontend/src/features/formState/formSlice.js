import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    form:false
}

const formSlice = createSlice({
    name:"form",
    initialState,
    reducers:{
        updateState:(state) => {
            state.form = !state.form
        }
    }
})

export const { updateState } = formSlice.actions
export default formSlice.reducer