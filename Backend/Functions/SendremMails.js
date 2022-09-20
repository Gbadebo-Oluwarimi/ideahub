const sgMail = require('@sendgrid/mail');
const Todomodel = require('../models/Todos')
const API_KEY = process.env.API_GRID;
sgMail.setApiKey(API_KEY);

var currentDate  = new Date();
currentDate.setHours(24,0,0,0)
console.log(currentDate);

//function to check the database for any reminder emails that need to be sent
// it sends them in bulk 
nodeCron.schedule('0 0 0 * * *', async() => {
    console.log('ran');

    await Todomodel.find({Todo_deadline:currentDate, Todo_status:'Pending'}).then((data) => {
        if(data){
            for(let i=0;i<data.length;i++){
               console.log(data);
                 //sends mail to the main user
               const message = {
                   from:{
                       name:'Paydate-Picotel',
                       email:'oluwarimigbadebo@gmail.com',
                   },
                   to:`${data[i].User_Email}`,
                   subject:`${data[i].title} Notification date has been reached`,
                   html:`<${data[i].title} invoice Notification date ${data[i].notification_date}`
               }
               sgMail.send(message).then(()=> console.log(`Email Sent for Main User${data[i].User_Email} ....... `))
               .catch((err) => console.log(err));
            }
        }else{
            console.log('no user email needs to be sent today')
        }
    });
 });