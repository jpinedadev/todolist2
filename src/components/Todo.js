import React, {useState} from "react"

function Todo({ todo, todoDelete, todoToggleCompleted, setTodoEdit }){
    
    return(
            <div className="card mt-2">
                <div className="card-body">
                    <h3 className="card-title ml-4">
                         {todo.title}
                    
                        <button 
                            onClick={()=> todoToggleCompleted(todo.id)}
                            className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'}`}>
                            {todo.completed ? 'Terminado' : 'Terminar'}
                        </button>
                    </h3>
                    <p className="card-text text-right">
                        {todo.description}
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <button 
                            onClick={()=> setTodoEdit(todo)}
                            className="btn btn-sm btn-outline-primary">
                            Editar
                        </button>
                    <button 
                    onClick={() => todoDelete(todo.id)}
                        className="btn btn-sm btn-outline-danger"
                    >
                        Eliminar
                    </button>

                    </div>
                </div>
            </div>
        )
}

export default Todo
