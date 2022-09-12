import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    form:false,
    todo:false,
    edit:false,
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
        },
        updateEditState:(state) => {
            state.edit = !state.edit
        }
    }
})

export const { updateState, updateTodoState, updateEditState } = formSlice.actions
export default formSlice.reducer