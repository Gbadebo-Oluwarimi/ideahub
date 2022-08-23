 const Branchmodel = require('../models/Branch')
 
 const getUser = (req, res) => {
    res.json(req.user).status(200)
 }

 const dashboard = async (req, res) => {
    console.log('ranooo')
    try{
        const data = await Branchmodel.find({branch_owner:req.user._id});
        if(!data){
            res.json("This user dosen't have any project").status(401)
        }
        res.json(data).status(201);
    }catch(error){
        res.json('error').status(400)
    }
}

//get the todo branch




// create the todo branch
const create_branch = async(req, res) => {
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

}
// update the todo branch 

const delete_branch = (req, res) => {
    const { branch_id } = req.body;
    const branch = Branchmodel.findByIdAndDelete({branch_id});
    if(!branch){
        throw new Error('An Error Occured While Deleting the file')
    }
    res.status(201).json('Branch Deleted Succesfully')

}

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

module.exports = {
    dashboard,
    create_branch,
    delete_branch,
    getUser,
    get_Branch,
}