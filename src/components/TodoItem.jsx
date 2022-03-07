import { useDispatch } from "react-redux"
import { removeTodo, markTodoDone } from "../actions/todos"

export default function TodoItem({ id, title, isDone }) {
    const dispatch = useDispatch()
    const handleMarkTodo = (e) => {
        dispatch(markTodoDone({
            id,
            title,
            isDone: e.target.checked
        }))
    }
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                {isDone ? (
                    <>
                        <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            onChange={handleMarkTodo}
                            checked
                        />
                        <label
                            className="form-check-label text-decoration-line-through checked"
                            htmlFor="flexCheckDefault">{title}
                        </label>
                    </>
                ) : (
                    <>
                        <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            onChange={handleMarkTodo}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault">{title}
                        </label>
                    </>
                )}


            </div>
            <button className="btn btn-danger" onClick={() => dispatch(removeTodo(id))}>x</button>
        </li>
    )
}