const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    console.log(req.session);
    res.json({message: "Device Connected Succesfully"})
})

module.exports = routes