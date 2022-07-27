const Usermodel = require("../models/User")
const asyncexpress = require('express-async-handler')
const bcrypt = require('bcryptjs')


const Registercontroller = asyncexpress(async(req, res) =>{
    const { email, username, password } = req.body;
    if(!email || !username || !password ){
       res.status(400).send({message:"All fields are qequired"});
    }
    else{
    let user = await Usermodel.findOne({email})
    if(user){
        res.json({message:"This user already exists"})
    }

    //Hash the password before saving it 
    const salt = await bcrypt.genSalt(10);

    const hashedpassword = await bcrypt.hash(password, salt);

    user = new Usermodel({
        email,
        username,
        password:hashedpassword,
    });

    await user.save().then(() => {
        res.json({message:user})
    })
}
})

const LoginController = asyncexpress(async(req, res) => {
    try {
        const { email, password } = req.body;
    if(!email || !password){
        res.status(400).send({message:"Fields are required"})
    }
    else{
        let user = await Usermodel.findOne({email})
        if(user){
            const isMatch = await bcrypt.compare(password, user.password);
            if(isMatch){
                console.log("Logged in succesfully".green.underline)

                req.session.user = (user._id)
                req.session.isAuth = true
                res.redirect('/api/details')
            }else{
                res.send({message:"Passwords dosent match"}).status(401)
            }
        }else{
            res.status(404).send({message:"User does not exist"})
        }
    }
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})


const LogoutController = (req, res) => {
    req.session.destroy((err) => {
        if(err) throw err;
        res.send({message:"session destroyed"})
    })
}
module.exports = {
    Registercontroller,
    LoginController,
    LogoutController
}