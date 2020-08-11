var express=require('express');
var app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send("<h1>Response from 'server'..</h1>");
});
app.listen(port,()=>console.log("server started at port" +port));