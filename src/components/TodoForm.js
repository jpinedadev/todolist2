import React, {useState, useEffect} from "react"

const initialFormValues = {
    title:'',
    description:''
}

function TodoForm({ todoAdd, todoEdit, todoUpdate, setTodoEdit }){
    const [formValues, setFormValues] =  useState(initialFormValues);
    const {title,description} = formValues;
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null)
    
    useEffect(()=> {
        if (todoEdit) {
         setFormValues(todoEdit);           
        }else{
            setFormValues(initialFormValues)
        }

    },[todoEdit])

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

        if (todoEdit) {
            //Actualizando 
            todoUpdate(formValues);
            setSuccessMessage('Actualizado con exito!')

        }else {
           //Agregar Tarea
           todoAdd(formValues);
           setSuccessMessage('Agregado con exito!')
           setFormValues(initialFormValues)

        }

        setTimeout(()=>{
            setSuccessMessage(null)
        },2000)
        setError(null)
    }

    return(
        <div>
            <h2 className="text-center display-5">{todoEdit ? 'Editar tarea' : 'Nueva tarea'}</h2>
            {
                todoEdit &&
                 <button className="btn btn-sm btn-warning mb-2"
                    onClick={()=> setTodoEdit(null)}>
                    Cancelar edicion
                 </button>
            }

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
                    {todoEdit ? 'Actualizar tarea' : 'Agregar tarea'}
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
