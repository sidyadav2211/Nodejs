const fs = require('fs');
const path = require('path');
const dirPath =path.join(__dirname,'crud');

// crud file 
const filePath =`${dirPath}/hello.txt`;

// create file
fs.writeFileSync(filePath,'Simple file');

// read file 
fs.readFile(filePath,'utf8',(err,file)=>{
    console.log(file)
})


// edit file 
fs.appendFile(filePath,'Hello kailash',(err,file)=>{
    if(!err) console.log(file);
});

// rename file 
fs.rename(filePath,`${dirPath}/sid.txt`,(err)=>{
    if(!err) console.log("file name changed")
})

// remove 

fs.unlinkSync(`${dirPath}/sid.txt`)