const express = require('express')
const Usermodel = require("../models/User")

const isAuth = async(req, res, next) => {
    if(req.session.isAuth){
        req.user = await Usermodel.findById(req.session.user).select('-password')
        if(!req.user){
            throw new Error('AFBjki;')
        }
        next()
    }
    else{
      res.json('error').status(401)
    }
}
module.exports = isAuth