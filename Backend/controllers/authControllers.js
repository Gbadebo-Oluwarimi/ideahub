const Usermodel = require("../models/User")
const asyncexpress = require('express-async-handler')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ForgotPassword = require("../Functions/Forgot");

const Registercontroller = asyncexpress(async(req, res) => {
    const { username, email, password } = req.body
    if(!username || !email || !password){
        res.status(400)
        throw new Error("Please fill in all fields")
    }
    const userExists = await Usermodel.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User Already exists')
    }
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const Hashedpassword = await bcrypt.hash(password, salt);
    const user = await Usermodel.create({username, email, password:Hashedpassword})
    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.username,
            email:user.email,
        })
    }else{
        res.status(400)
        throw new Error("Invalid User Data")
    }
})

const LoginController = asyncexpress(async(req, res) => {
    try {
        const { email, password } = req.body;
    if(!email || !password){
        res.status(400)
        throw new Error('All fields are required')
    }
    else{
        let user = await Usermodel.findOne({email})
        if(user){
            const isMatch = await bcrypt.compare(password, user.password);
            if(isMatch){
                console.log("Logged in succesfully".green.underline)

                req.session.user = (user)
                req.session.isAuth = true
                res.json(req.session.user);
                // res.redirect('/api/details')
            }else{
                res.status(401)
                throw new Error('password fields do not match')
            }
        }else{
            res.status(404)
            throw new Error("user dosen't exist")
        }
    }
    } catch (error) {
        console.log(error);
        throw new Error('Invalid Credentials')
    }
})


const LogoutController = (req, res) => {

    req.session.destroy((err) => {
        res.clearCookie('connect.sid')
        if(err) throw err;
        console.log('Logged out succesfully'.green.underline)
        res.json("session destroyed")
    })
}

const forgotPassword = asyncexpress(async(req, res) =>{
    const { email } = req.body
    const user = await Usermodel.findOne({email});
    if(user){
        //creating a one time link to reset the password using jwt
        const link2 = ForgotPassword(user._id, user.password, user.email);
        console.log(link2)
        res.json("Email Sent to " + email).status(201)
    }else{
        res.status(400);
        throw new Error('This User Dosent Exist')
    }
})

const ResetPassword = asyncexpress(async(req, res) => {
    const{ id, token } = req.params;
    const { password, password2 } = req.body
    // console.log(req.params, req.body)
    //check if id exists in database
    const user = await Usermodel.findById(id);
    if(!user){
        res.json("User Dosen't Exist").status(401);
        return;
    }else{
        const secret = process.env.JWT_SECRET + user.password;
        try {
            const payload = jwt.verify(token, secret)
            if(password !== password2){
                res.json("The Fields Do Not Match").status(301)
            }else{
    
                //Hash the password
            const salt = await bcrypt.genSalt(10);
    
            const hashedpassword = await bcrypt.hash(password, salt);
            await Usermodel.findByIdAndUpdate(id, {password:hashedpassword});
    
            // await db.mysessions.
            res.status(201).json("Password Updated Successfully")
            }
        } catch (err) {
            res.status(301)
           throw new Error("Invalid Signature")
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