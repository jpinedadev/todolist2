import React, {useState} from "react"

const initialFormValues = {
    title:'',
    description:''
}

function TodoForm(todoAdd){
    const [formValues, setFormValues] =  useState(initialFormValues);
    const {title,description} = formValues;
    const handleInputChange = (e) =>{
        const changeFormValues={
            ...formValues,
            [e.target.name] : e.target.value
        }
        setFormValues(changeFormValues)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('submit');
        //Agregar Tarea
        todoAdd(formValues);
    }

    return(
        <div>
            <h1>Nueva Tarea</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Titulo" 
                    className="form-control"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                >
                </input>

                <textarea 
                    placeholder="Descripcion" 
                    className="form-control mt-2"
                    value={description}
                    name="description"
                    onChange={handleInputChange}
                >
                </textarea>

                <button 
                    className="btn btn-primary btn-block mt-2">
                    Agregar tarea
                </button>
                

            </form>
        </div>
        )
}

export default TodoForm
