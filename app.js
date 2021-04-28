var express = require("express")
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override")
var Todo = require("./routes/todo");
var todo = require("./model/todo");
var app = express();

app.use("/public",express.static("public"));
app.set("view engine","ejs");

mongoose.connect('mongodb://localhost:27017/todo_list',{ useNewUrlParser: true });

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    todo.find({}, function(err,alltodo){
        if(err){
            console.log(err);
        }else{
            res.render("index",{todo:alltodo});
        }
    });
})

app.use("/",Todo);

app.listen(3000,function(){
    console.log("connected");
})