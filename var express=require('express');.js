var express=require('express');
var app=express();
app.get('/hello',function(req,res)
{
    res.sendFile(__dirname+"/"+"get.html");
)}
app.get('/process-get',function(req,res){
    response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
 };
 console.log(response);
 res.end("In webpage="+Json.stringify(response));
)}