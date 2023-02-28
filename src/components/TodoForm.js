import React, {useState} from "react"

const initialFormValues = {
    title:'',
    description:''
}

function TodoForm({ todoAdd }){
    const [formValues, setFormValues] =  useState(initialFormValues);
    const {title,description} = formValues;
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null)
    

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
        if(title.trim() === ''){
            setError('Debes indicar un titulo');
            return;
        }

        if(description.trim() === ''){
            setError('Debes indicar una descripcion')
            return;
        }
        //Agregar Tarea
        todoAdd(formValues);
        setFormValues(initialFormValues)
        setSuccessMessage('Agregado con exito!')
        setTimeout(()=>{
            setSuccessMessage(null)
        },2000)
        setError(null)
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
            {
                error 
                    ? (
                        <div className="alert alert-danger mt-2">
                            {error}
                        </div>
                    ): null
            }

            {
                successMessage && (
                    <div className="alert alert-success mt-2">
                        { successMessage }
                    </div>
                )
            }

        </div>
        )
}

export default TodoForm
