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
        enum: ['Pending', 'Fulfilled', 'Destroyed'],
        default:'Pending'
    },
    Todo_important:{
        type:Boolean,
        default:false,
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
