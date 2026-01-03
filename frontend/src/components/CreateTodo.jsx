import { useState } from "react";

export function CreateTodo(){

    const[title, setTitle] = useState();
    const[description, setDescription] = useState();

    return(
        <div className="p-5 max-w-lg mx-auto space-y-3">
            <input 
                className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors"
                placeholder="Title" 
                type="text"
                onChange={function(e){
                    const value= e.target.value;
                    setTitle(e.target.value);
                }}
            />
            
            <input 
                className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors"
                placeholder="Description" 
                type="text"
                onChange={function(e){
                    const value= e.target.value;
                    setDescription(e.target.value);
                }}
            
            />

            <button className="w-full px-4 py-3 text-base font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
                onClick={() => {
                    fetch("http://localhost:3000/todos", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "content-type": "application/json"
                        }
                    })
                    .then(async function(res){
                        const json = await res.json();
                        alert("Todo Added");
                    })  
                }}     
            >
                Add a todo
            </button>
        </div>
    )
}