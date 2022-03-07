import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import TodoFooter from "./components/TodoFooter";
import { initialTodos } from "./actions/todos";
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";


export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(initialTodos(JSON.parse(localStorage.getItem('todos'))))
    };
  }, [dispatch])
 
  const todoItem = useSelector(state => state.todos)
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <TodoHeader length={todoItem.length} />
            <TodoForm />
            <TodoItems />
            <TodoFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

// Git upload repository to github command
// git init
// git add .
// git commit -m "first commit"
// git remote add origin
// git push -u origin master
// git remote -v

