const app = require('./app')
const fs = require('fs');
const http = require('http');
const port = 3002;
const hostName = 'localhost'
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.write('Hello node js')
    res.end();
}).listen(port,hostName,()=>{
    console.log(`Serve running at http://${hostName}:${port}`)
});