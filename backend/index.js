const express = require("express");
const { createTodos, updateTodos } = require("./types");
const app = express();

app.use(express.json());

app.post("/todos", function(req, res){

    const createPayload = req.body;
    const parsedPayload = createTodos.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You provided the wrong inputs",
        })
        return;
    }
    //put in mongo or whatever afterwards
})

app.get("/todos", function(req, res){

});

app.put("/completed", function(req, res){
    
    const updatePayload = req.body;
    const parsedPayload = updateTodos.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You provided the wrong inputs",
        })
        return;
    }
})