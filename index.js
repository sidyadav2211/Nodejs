const http = require('http');
const data = require('./data')
const host= 'localhost';
const port= 3004;
const apps= http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'})
    res.write(JSON.stringify(data));
    res.end()

})

apps.listen(port,host,()=>{
    console.log(`Server running at http://${host}:${port}`);
});

