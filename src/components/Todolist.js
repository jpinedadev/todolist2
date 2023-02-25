import React, {useState} from "react"
import Todo from "./Todo"

const todo1 = {
    title:'Todo #1',
    description:'Desc del todo #1',
    completed:false
}

const todo2 = {
    title:'Todo #2',
    description:'Desc del todo #2',
    completed:true
}

function Todolist(){
    return(
        <div>
            <h1 className="text-right">Soy un Todolist</h1>
            <Todo todo={todo1} />
            <Todo todo={todo2} />


       </div>
        )
}

export default Todolist
