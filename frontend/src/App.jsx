import React from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import { useState, useEffect } from "react";


function App(){
const [todos, setTodos] = useState([]);

useEffect(() => {
  fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
    })
}, []);

  return(  
    <div>
      {/* <h1>Hi</h1> */}
      <CreateTodo />
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App