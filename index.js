const express = require('express');

const fileterAge = require('./middleware')
const route = express.Router();
const app = express()
const port = 3003;
const hostName= 'localhost';

//using middleware - to filter or manipulation to response and request

// const fileterAge = ((req,res,next)=>{
//     if(!req.query.age){
//         res.send('Please provide age on url');
//     }else if(req.query.age < 18){
//         res.send('You do not have access this site');

//     }else{
//         next()
//     }
// })
// app.use(fileterAge);

route.use(fileterAge);

route.get('',(req,res)=>{
    res.send('Home Page ')
})
app.get('/user',(req,res)=>{
    res.send('User Page');
})
route.get('/contact',(req,res)=>{
    res.send('Contact Page');
})

app.use('/',route)

app.listen(port,hostName,()=>{
    console.log(`Server running at http://${hostName}:${port}`);
})