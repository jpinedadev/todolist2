import React, {useState} from "react"
import Todo from "./Todo"





function Todolist({todos, todoDelete, todoToggleCompleted}){


    return(
        <div>
            <h1 className="text-right">Soy un Todolist</h1>
            {
                todos.map(todo => (
                    <Todo 
                        todo={todo} 
                        key={todo.id}
                        todoDelete={todoDelete}
                        todoToggleCompleted={todoToggleCompleted}

                    />
                ))
            }
       </div>
        )
}

export default Todolist
