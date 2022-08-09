const express = require('express');

const app = express()
const port = 3002;
const hostName = 'localhost'

//set ejs
app.set('view engine','ejs')

app.get('/',(_,res)=>{
    res.render('home')
})
app.get('/profile',(_,res)=>{
    const data={
        name:'Kailash',
        lastName:'Yadav',
        city:'Pune',
        email:'kailash@gmail.com',
        skills:['c','c++', 'javaScript','Vue']
    }
    res.render('profile',{data:data})
})
app.listen(port,hostName,()=>{
    console.log(`Serve running at http://${hostName}:${port}`)
});

