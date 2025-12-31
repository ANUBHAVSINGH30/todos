const express = require("express");
const { createTodos, updateTodos } = require("./types");
const { todo } = require("./db");
const { describe } = require("zod/v4/core");
const app = express();

app.use(express.json());

//post route

app.post("/todos", async function(req, res){

    const createPayload = req.body;
    const parsedPayload = createTodos.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You provided the wrong inputs",
        })
        return;
    }
    //put in mongo or whatever afterwards
    await todo.Create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
})

//get route

app.get("/todos", async function(req, res){

    const todos = await todo.find({})

    res.json({
        todo
    })
});


//update route

app.put("/completed", async function(req, res){
    
    const updatePayload = req.body;
    const parsedPayload = updateTodos.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You provided the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})