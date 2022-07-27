const express = require('express')
const Usermodel = require("../models/User")

const isAuth = async(req, res, next) => {
    console.log(req.session.isAuth)
    if(req.session.isAuth){
        req.user = await Usermodel.findById(req.session.user).select('-password')
        console.log(req.user)
        next()
    }
    else{
        res.send({message:"No authorized"})
    }
}
module.exports = isAuth