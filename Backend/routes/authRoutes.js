const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.json({message: "Device Connected Succesfully"})
})

module.exports =  routes