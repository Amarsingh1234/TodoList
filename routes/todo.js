var express = require("express")
var router = express.Router();
var methodOverride = require("method-override")
var todo = require("../model/todo");
router.get("/add",function(req,res){
    res.render("add");
})

router.post("/add",function(req,res){
    var title = req.body.title;
    todo.create({title}, function(err,newlytodo){
        if(err){
            console.log(err);
        }else{
            console.log(newlytodo)
            res.redirect("/");
        }
    });
})

router.get("/:id/edit", function(req,res){
    todo.findById(req.params.id,function(err,foundtodo){
        res.render("edit",{todo:foundtodo});
    });
});

router.put("/:id",function(req,res){
    todo.findByIdAndUpdate(req.params.id,req.body.todo,function(err,updatedtodo){
        if(err){
            // console.log(err);
            res.redirect("/");
        }else{
            res.redirect("/");
        }
    })
})

router.post("/:id/done",function(req,res){
    todo.findById(req.params.id,function(err,Todo){
        if(err){
            console.log(err);
            res.redirect("/");
        }else{
            // if(Todo.done==false){
            //     Todo.done=true;
            // }else{
            //     Todo.done=false;
            // }
            Todo.done=!Todo.done;
            Todo.save();
            console.log(Todo);
            res.redirect("/");
        }
    })
})

router.delete("/:id",function(req,res){
    todo.findByIdAndDelete(req.params.id,function(err){
        if(err){
            res.redirect("/")
        }else{
            res.redirect("/")
        }
    })
})

module.exports=router;