const express = require('express');
const { commit } = require('./config');
const con = require('./config')
const app = express()
const port = 4002;
const host ='localhost';


app.use(express.json())
app.get('',(req,res)=>{
    con.query( 'select * from employee' ,(err,result)=>{
        if(err){
            res.send('error')
        }else{
            res.send(result)
        }
    })

})
app.post('',(req,res)=>{
    const data = req.body;
    con.query('Insert into employee set ?',data, (error,result,fields)=>{
        if(error) error;
        res.send(result);
    })
})

app.put('/:id',(req,res)=>{
    const data = [req.body.name,req.body.Age,req.body.Address,req.body.phone,req.params.id];
    con.query('update employee set name=?,Age=?,Address=?,phone=? where name=?',data,(error,result,fields)=>{
        if(error) error;
        if(!result.affectedRows){
            const data =req.body;
            con.query('insert into employee set ?',data,(error,result,fields)=>{
                if(error) error;
                res.send(result)
            })
        }else{
            res.send(result)
        }
        
    })
})
app.delete('/:id',(req,res)=>{

    con.query("Delete from employee WHERE name =?" ,req.params.id,(err,result)=>{
        if(err) err;
        res.send(result);
    })
})

app.listen(port,host,()=>{
    console.log(`Server runing at http://${host}:${port}`)
})