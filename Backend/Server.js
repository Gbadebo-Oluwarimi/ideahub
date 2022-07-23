const express =require('express')
const colors = require('colors');
const dotenv = require('dotenv').config()
const { connectdb } = require('./config.js/db');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('api/auth', require('./routes/authroutes'));
const PORT = 5000 || process.env.PORT;

connectdb();
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT} 🚀 🚀` .cyan.underline)
})