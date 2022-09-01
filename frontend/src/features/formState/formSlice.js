import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    form:false,
    todo:false,
}

const formSlice = createSlice({
    name:"form",
    initialState,
    reducers:{
        updateState:(state) => {
            state.form = !state.form
        },
        updateTodoState:(state) => {
            state.todo = !state.todo
        }
    }
})

export const { updateState, updateTodoState } = formSlice.actions
export default formSlice.reducer