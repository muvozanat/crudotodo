import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import TodoFooter from "./components/TodoFooter";

export default function App() {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <TodoHeader />
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
