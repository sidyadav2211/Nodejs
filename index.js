const app = require('./app')
const fs = require('fs');
const http = require('http');
const chalk = require('chalk');
const port = 3002;
const hostName = 'localhost'

console.log('added comments');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.write('Hello node js')
    res.end();
}).listen(port,hostName,()=>{
    console.log(`Serve running at http://${hostName}:${port}`)
});

const nameList  = fs.writeFileSync('nameList.txt','list');

console.log(chalk.blue('hey'));