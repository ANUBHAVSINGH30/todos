const mongoose = require("mongoose");

mongoose.connect("")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todos = mongoose.model('todos', todoSchema);