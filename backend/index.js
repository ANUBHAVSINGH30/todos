const express = require("express");
const cors = require("cors")
const { createTodos, updateTodos } = require("./types");
const { todo } = require("./db");
const { describe } = require("zod/v4/core");
const app = express();

app.use(express.json());
app.use(cors());


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
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created successfully"
    })          
})


//get route

app.get("/todos", async function(req, res){

    const todos = await todo.find({})

    res.json({
        todos
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
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})