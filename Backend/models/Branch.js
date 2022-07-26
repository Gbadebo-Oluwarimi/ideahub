const mongoose = require('mongoose')

const BranchSchema = new mongoose.Schema({
    branch_title:{
        type:String,
        required:true,
    },
    branch_purpose:{
        type:String,
    },
    branch_owner:{
         type:mongoose.SchemaTypes.ObjectId,
          ref: 'User' ,
    },

}, {timestamps:true}) 

module.exports = mongoose.model('Todobranch', BranchSchema);
