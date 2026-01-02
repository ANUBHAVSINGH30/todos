export function CreateTodo(){
    return(
        <div className="p-5 max-w-lg mx-auto space-y-3">
            <input 
                className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors"
                placeholder="Title" 
                type="text"
            />
            
            <input 
                className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors"
                placeholder="Description" 
                type="text"
            />

            <button className="w-full px-4 py-3 text-base font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                Add a todo
            </button>
        </div>
    )
}