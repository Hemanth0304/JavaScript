var express=require("express");
var app=express();


var studentRoutes = require("./student.route");
var employeeRoutes = require("./employee.route");

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.set('view engine', 'pug');
app.set('views','./views');
 

 
app.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html");
})
 
app.use("/student",studentRoutes)
app.use("/employee",employeeRoutes)

app.listen(8090,function(){
    console.log("listening on 8090")
})

