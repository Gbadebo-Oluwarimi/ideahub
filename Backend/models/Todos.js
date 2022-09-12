const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    Todo_title:{
        type:String,
        required:true,
    },
    Todo_description:{
        type:String,
    },
    Todo_status:{
        type:String,
        enum: ['Pending', 'Completed', 'Destroyed'],
        default:'Pending'
    },
    // Todo_branch_title:{
    //     type:String,
    //     required:true,
    // },
    todo_branch_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'Todobranch',
        required:true
    }

}, {timestamps:true}) 

module.exports = mongoose.model('Todos', TodoSchema);
