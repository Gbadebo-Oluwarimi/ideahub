import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    form:false,
    todo:false,
    edit:false,
    notification:false,
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
        },
        updatenotificationState:(state) => {
            state.notification = !state.notification
        }
    }
})

export const { updateState, updateTodoState, updateEditState, updatenotificationState } = formSlice.actions
export default formSlice.reducer