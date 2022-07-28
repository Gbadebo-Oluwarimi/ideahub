const Usermodel = require("../models/User")
const asyncexpress = require('express-async-handler')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ForgotPassword = require("../Functions/Forgot");
const reset = require("../Functions/resetPassword");


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

const forgotPassword = asyncexpress(async(req, res) =>{
    const { email } = req.body
    console.log(req.body)

    const user = await Usermodel.findOne({email});
    if(!user){
        res.send({message:"User Doesn't Exist"})
        return;
    }else{
        //creating a one time link to reset the password using jwt
        const link2 = ForgotPassword(user._id, user.password, user.email);
        console.log(link2)
    res.json({message:"Forgot Password"})
    }
})

const ResetPassword = asyncexpress(async(req, res) => {
    const{ id, token } = req.params;
    const { password, password2 } = req.body
    //check if id exists in database
    const user = await Usermodel.findById(id);
    if(!user){
        res.send({message:"User Dosen't exist"}).status(401);
        return;
    }else{
        const secret = process.env.JWT_SECRET + user.password;
        try {
            const payload = jwt.verify(token, secret)
            if(password !== password2){
                res.send({messsage:"The Fields Dosen't match"}).status(301)
            }else{
    
                //Hash the password
            const salt = await bcrypt.genSalt(10);
    
            const hashedpassword = await bcrypt.hash(password, salt);
            await Usermodel.findByIdAndUpdate(id, {password:hashedpassword});
    
            // await db.mysessions.
            res.send(user)
            }
        } catch (err) {
            res.send(err.mesage);
            console.log(err.message)
        }// this might be a problem
    }


    
})
module.exports = {
    Registercontroller,
    LoginController,
    LogoutController,
    forgotPassword,
    ResetPassword,
}