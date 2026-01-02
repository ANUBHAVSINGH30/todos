const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anubhavmrx_db_user:Anubhav7795@cluster0.tseoj2w.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}