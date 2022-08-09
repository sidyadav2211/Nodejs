//Make file for middle ware to used anywhere
module.exports =fileterAge = ((req,res,next)=>{
    if(!req.query.age){
        res.send('Please provide age on url');
    }else if(req.query.age < 18){
        res.send('You do not have access this site');

    }else{
        next()
    }
})