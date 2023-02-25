import React, {useState} from "react"

function Todo({ todo }){
    
    return(
            <div className="card mt-2">
                <div className="card-body">
                    <h3 className="card-title text-right">
                        {todo.title}
                        <button className="btn btn-sm btn-outline-success ml-2">Terminar</button>
                    </h3>
                    <p className="card-text text-right">
                        {todo.description}
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                    <button className="btn btn-sm btn-outline-primary">Editar</button>
                    <button className="btn btn-sm btn-outline-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        )
}

export default Todo
