const express = require('express')
const Usermodel = require("../models/User")

const isAuth = async(req, res, next) => {
    if(req.session.isAuth){
        req.user = await Usermodel.findById(req.session.user).select('-password')
        // console.log(req.user)
        next()
    }
    else{
        res.send({message:"Not authorized"})
    }
}
module.exports = isAuth