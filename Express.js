var express = require("express");

var app=express();
var Data=[];

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req,res){ res.send("Good AfterNoon")})

app.get("/reg",function(req,res){res.sendFile(__dirname+"registration.html")})

app.post("/register",function(req,res)
{
    console.log("Request Data",req.body);
    students.push(req.query);
    res.send(JSON.stringify(Data))
})

app.listen(8090,function(){console.log("listening on 8090")})

// ---------------------------------------

