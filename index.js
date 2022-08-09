const express= require('express');
const app = express();


const port = 4000;
const localhost ='localhost';
app.get('',(req,res)=>{
    res.send('Hello, Home Page')
})
app.get('/about',(req,res)=>{
    res.send('Hello, About Page')
})

app.listen(port,()=>{
    console.log(`Server is running at http://${localhost}:${port}`);
})
