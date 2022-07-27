
const Usercontroller = (req, res) =>{
    const { email, username, password, password2 } = req.body;
    if(!email || !username || !password || !password2){
        res.send("All fields must be filled")
    }
    // res.json({message:"worked"})
}

module.exports = {
    Usercontroller
}