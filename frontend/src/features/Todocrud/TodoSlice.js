import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  todocreate  from './TodoService'

const initialState = {
    todos:[],
    loading:false,
    error:false,
    success:false,
    errormsg:"",
    gettodo:null
}

export const get_all_todos = createAsyncThunk('get_todos/todos',async(id, thunkAPI) => {
    try {
        return await todocreate.gettodos(id);
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
} )


export const createtodos = createAsyncThunk('create-todo/todos',async(userdata, thunkAPI) => {
    try {
        return await todocreate.create_Todo(userdata);
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
} )

export const get_particular_todo = createAsyncThunk('get/todo',async(userid, thunkAPI) => {
    try {
        return await todocreate.get_Todo(userid);
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
} )



const TodoSlice = createSlice({
    name:"all_todo",
    initialState,
    reducers:{
        resety:(state) => {
            state.error=false
            state.errormsg=""
            state.loading=false
            state.success=false
            state.todo=null
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(get_all_todos.pending, (state) => {
            state.loading=true
        })
        builder.addCase(get_all_todos.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.loading=false
            state.error=false
            state.success=true
            state.todos = action.payload
        })
        builder.addCase(get_all_todos.rejected, (state, action) => {
            state.loading=false
            state.error=action.payload
            state.success=false
            state.load=action.payload
        })


        //create todos
        builder.addCase(createtodos.pending, (state) => {
            state.loading=true
        })
        builder.addCase(createtodos.fulfilled, (state, action) => {
            state.loading=false
            state.error=false
            state.success=true
            state.todos.push(action.payload)

        })
        builder.addCase(createtodos.rejected, (state, action) => {
            state.loading=false
            state.error=true
            state.success=false
            state.errormsg = action.payload
        })
            // get  a particular todo
        builder.addCase(get_particular_todo.pending, (state) => {
            state.loading=true
        })
        builder.addCase(get_particular_todo.fulfilled, (state, action) => {
            state.loading=false
            state.error=false
            state.success=true
            state.gettodo = action.payload

        })
        builder.addCase(get_particular_todo.rejected, (state, action) => {
            state.loading=false
            state.error=true
            state.success=false
            state.errormsg = action.payload
        })

    }

})

export const { resety } = TodoSlice.actions
export default TodoSlice.reducer