import React, {useState} from "react"
import './App.css';
import TodoForm from './components/TodoForm';
import Todolist from './components/Todolist';


const initialTodos = [
    {
        id:1,    
        title:'Todo #1',
        description:'Desc del todo #1',
        completed:false
    },
    {
        id:2,    
        title:'Todo #2',
        description:'Desc del todo #2',
        completed:true
    }
]

function App() {
    const [todos, setTodos] = useState(initialTodos);
    const todoDelete = (todoId) => {
    const changedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(changedTodos)
    }

    const todoToggleCompleted =(todoId)=>{
        //const changedTodos = todos.map(todo=> {
            //const todoEdit = {
            //  ...todo,
            //  completed: !todo.completed
            //}
            //  if(todo.id === todoId){
            //  return todoEdit
            //   }else{
            //   return todo
            //}
            
        //})

        //const changedTodos =  todos.map(todo=>(
        //  todo.id === todoId 
        //      ? {...todo, completed: !todo.completed}
        //      : todo
        //))

        const changedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed}: todo);

        setTodos(changedTodos)
    }

    const todoAdd =(todo)=>{
        const newTodo = {
            id:Date.now(),
            ...todo,
            completed: false
        }
        const changedTodos= [
            ...todos,
            newTodo
        ]
        setTodos(changedTodos)
    }

  return (
      <div className="container mt-4">
          <div className="row">
              <div className='col-8'>
                  <Todolist 
                    todos={todos} 
                    todoDelete={todoDelete}
                    todoToggleCompleted={todoToggleCompleted}    
                />
              </div>
              <div className='col-4'>
                  <TodoForm todoAdd={todoAdd}/>
              </div>
        </div>
    </div>
  );
}

export default App;
