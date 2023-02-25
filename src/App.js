import './App.css';
import TodoForm from './components/TodoForm';
import Todolist from './components/Todolist';

function App() {
  return (
      <div className="container mt-4">
          <div className="row">
              <div className='col-8'>
                  <Todolist/>
              </div>
              <div className='col-4'>
                  <TodoForm/>
              </div>
        </div>
    </div>
  );
}

export default App;
