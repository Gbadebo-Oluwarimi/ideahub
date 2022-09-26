const express =require('express')
const colors = require('colors');
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const lodash = require('lodash')
const { connectdb } = require('./config.js/db');
const app = express();
const cors = require('cors');
const session = require('express-session');
const { errorHandler } = require('./middleware/errormiddleware');
const Mongodbsession = require('connect-mongodb-session')(session)
const sgMail = require('@sendgrid/mail');
const Todomodel = require('../Backend/models/Todos');
const nodeCron = require('node-cron')


sgMail.setApiKey(process.env.API_GRID);

var currentDate  = new Date();
currentDate.setHours(24,0,0,0)
console.log(currentDate);







const Store = new Mongodbsession({
    uri:process.env.MONGO_URI,
    collection:'mysessions'
})
app.use(cors({ credentials:true }))
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(session({
    saveUninitialized:false,
    resave:true,
    secret:"asuperimportantsecret",
    store:Store,
    cookie:{ secure:false, httpOnly:false }
}))
const PORT = 5000 || process.env.PORT;
connectdb();
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT} 🚀 🚀` .cyan.underline)
})
 nodeCron.schedule('1 * * * * *', async() => {
    console.log('ran');

    await Todomodel.find({ Todo_status:'Pending' }).then((data) => {
        if(data){
            console.log(data, 'ok')
            for(let i=0;i<data.length;i++){
               console.log(data, 'worked');
                 //sends mail to the main user
               const message = {
                   from:{
                       name:'Paydate-Picotel',
                       email:'oluwarimigbadebo@outlook.com',
                   },
                   to:`${data[i].User_email}`,
                   subject:`${data[i].Todo_title} Notification date has been reached`,
                   html:`<${data[i].Todo_title} Deadline has been reached ${data[i].Todo_deadline}`
               }
               sgMail.send(message).then(()=> console.log(`Email Sent for Main User ${data[i].User_email} ....... `))
               .catch((err) => console.log(err));
            }
        }else{
            console.log('no user email needs to be sent today')
        }
    });
 });

app.use('/api/auth', require('./routes/authRoutes.js'));
app.use('/api/details', require('./routes/dashboardRoutes.js'));
app.use(errorHandler);


