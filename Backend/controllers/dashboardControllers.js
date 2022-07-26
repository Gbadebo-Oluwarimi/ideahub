 const Branchmodel = require('../models/Branch')
 const Todomodel = require('../models/Todos')
 const asyncHandler = require("express-async-handler");
 const getUser = (req, res) => {
    res.json(req.user).status(200)
 }

 const dashboard = asyncHandler(async (req, res) => {
    // console.log('ranooo')
    try{
        const data = await Branchmodel.find({branch_owner:req.user._id});
        if(!data){
            res.json("This user dosen't have any project").status(401)
        }
        res.json(data).status(201);
    }catch(error){
        res.json('error').status(400)
    }
})

//get the todo branch




// create the todo branch
const create_branch = asyncHandler(async(req, res) => {
    const { branch_title, branch_purpose } = req.body;
    // console.log(req.body)
    if(!branch_title || !branch_purpose){
        res.status(300);
        throw new Error('All Fields must be filled')
    }
    const branch = await Branchmodel.create({branch_title, branch_purpose, branch_owner:req.user._id})
    if(branch){
        res.status(201).json(branch);
    }

})
// update the todo branch

const delete_branch = asyncHandler(async(req, res) => {
    const { branch_id } = req.params;
    // console.log(req.params, 'reacehd');
    const todos_to_be_deleted = await Todomodel.deleteMany({todo_branch_id:branch_id});
    // console.log(todos_to_be_deleted);
   await Branchmodel.findByIdAndDelete(branch_id).then(() => res.status(200).json('Branch Deleted successfully'))
    .catch((error) => {
        throw new Error('Could not delete the branch ');
        res.status(300)
    })

})

//get a particular branch
const get_Branch = async(req, res) => {
    const { id } = req.params;
    const data = await Branchmodel.findById(id);
    if(data){
        res.json(data).status(200);
    }
    else{
        res.json('no user').status(400)
    }

}
//get all branch of the user
const get_particular_branch = async(req, res) => {
        try {
        const branches = await Branchmodel.find({ branch_owner:req.user._id })
        // console.log(branches)
        if(branches) res.status(200).json(branches)
        else res.status(300).json('No Branch')
        }
        catch (error) {
            res.json('An Error Occurred', error).status(400)
        }

}


//create a todo under a branch
const create_Todo = async(req, res) => {
    const { Todo_title, Todo_description,Todo_branch_id,Todo_deadline} = req.body
    console.log(req.body)
    try {
        // console.log('ran2')
        if(!Todo_title || !Todo_description || !Todo_branch_id){
          res.status(300)
          throw new Error('All fields are required')
        }else{
            console.log(req.user.email)
            await Todomodel.create({
                Todo_title,Todo_description,todo_branch_id:Todo_branch_id, Todo_deadline,User_email:req.user.email
            }).then((data) => {
               res.status(200).json(data)
                console.log('saved succesfully', data)
            });
        }
    } catch (error) {
        throw new Error('All Fields Are Required')
        res.json(error.message).status(400)
    }
}

//delete a todo

const delete_Todo = async(req, res) => {
    const { Todo_id } = req.body;
    console.log(req.body)
    const Todo = await Todomodel.findByIdAndDelete(Todo_id);
    if(!Todo){
        throw new Error('An Error Occured While Deleting the file')
    }
    res.status(201).json('Branch Deleted Succesfully')

}

//get all the todo in a particular branch
const getAllTodo = async(req, res) => {
    const { id } = req.params
    // console.log(id)
    try {
        await Todomodel.find({todo_branch_id:id}).then((data) => res.status(200).json(data))
    } catch (error) {
        throw new Error(error.message)
    }
}

//update a particular todo
const Update_todo = async(req, res) => {
    const { id } = req.params
    // console.log(req.params)
    // console.log(req.body)
    const { status, description, title } = req.body
  const found = await Todomodel.findByIdAndUpdate({_id:id}, {Todo_status:status, Todo_description:description, Todo_title:title})
  if(found){
    res.status(200).json(`${found.Todo_title} Has been Updated Successfully`)
  }else{
    res.status(400).json('Not Found')
  }
}

const get_particular_todo = async(req, res) => {
    const { userid } = req.params
    console.log(req.params);
    const found = await Todomodel.findOne({_id:userid})
    if(found){
        res.status(200).json(found)
        // console.log(found);
      
    }
    else{
        res.status(300).json('No Found');
    }
}
 const get_all_completed_todos = asyncHandler(async(req, res) => {

})
 const get_all_InProgress_todos = asyncHandler(async(req, res) => {

})
module.exports = {
    dashboard,
    create_branch,
    delete_branch,
    getUser,
    get_Branch,
    get_particular_branch,
    delete_Todo,
    create_Todo,
    getAllTodo,
    Update_todo,
    get_particular_todo,
    get_all_InProgress_todos,
    get_all_completed_todos
}