const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname,'files')
console.log(dir);
for (let i=0; i<5;i++){
    fs.writeFileSync(dir+"/hello"+i+".txt",'Files is created')
}

fs.readdir(dir,(err,files)=>{
    files.forEach((item)=>{
        console.log(item,'List of files')
    })
})

