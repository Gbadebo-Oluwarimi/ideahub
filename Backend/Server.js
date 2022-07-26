const express =require('express')
const colors = require('colors');
const dotenv = require('dotenv').config()
const { connectdb } = require('./config.js/db');
const app = express();
const session = require('express-session');


app.use(session({
    saveUninitialized:true,
    resave:true,
    secret:"asuperimportantsecret"
}))



app.use(express.json())
app.use(express.urlencoded({extended: false}))

const PORT = 5000 || process.env.PORT;

connectdb();
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT} 🚀 🚀` .cyan.underline)
})

app.use('/api/auth', require('./routes/authRoutes.js'));