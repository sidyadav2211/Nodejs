const express = require('express');

const path = require('path');

const port = 3001;

const filePath = path.join(__dirname,'public');
const app= express();


// using static file
// app.use(express.static(filePath));

// dynamic get files

app.get('/',(req,res)=>{
    res.sendFile(`${filePath}/index.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(`${filePath}/about.html`)
})
app.get('*',(req,res)=>{
    res.sendFile(`${filePath}/noPageFound.html`)
})
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})
