import TodoItem from "./TodoItem";
import { useSelector } from "react-redux"

export default function TodoItems() {
    const todos = useSelector(state => state.todos)
    return (
        <ul className="list-group list-group-flush">
            {
                todos.length > 0 ? todos.map(item => (
                    <TodoItem title={item.title} id={item.id} key={item.id} isDone={item.isDone} />
                )) : (
                    <h3 className="text-center my-3">Todos not created</h3>
                )
            }
        </ul>
    )
}