import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    form:false,
    todo:false,
    edit:false,
    notification:false,
    confirm:false,
    tododelete:null,
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
        },
        updatedeleteState:(state, action)=> {
            console.log(action);
            state.confirm = !state.confirm
            state.tododelete = action.payload

        },
        canceldelete:(state) => {
            state.confirm = !state.confirm
            state.tododelete = null
        }
    }
})

export const { updateState, updateTodoState, updateEditState, canceldelete,updatenotificationState, updatedeleteState } = formSlice.actions
export default formSlice.reducer