 const Branchmodel = require('../models/Branch')
 
 const dashboard = (req, res) => {
    res.json(req.user).status(204)
}
// create the todo branch
const create_branch = (req, res) => {
    const { branch_title, branch_purpose } = req.body;
    // console.log(req.body)
    if(!branch_title || !branch_purpose){
        res.status(300);
        throw new Error('All Fields must be filled')
    }
    const branch = Branchmodel.create({branch_title, branch_purpose, branch_owner:req.user._id})
    if(branch){
        res.status(201).json(`Branch for ${req.user.username} created succesfully`);
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

module.exports = {
    dashboard,
    create_branch,
    delete_branch,
}