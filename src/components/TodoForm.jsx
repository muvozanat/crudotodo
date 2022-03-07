import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../actions/todos"
import { v4 as uuidv4 } from "uuid"


export default function TodoForm() {
    const inputRef = useRef(null)
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        (inputRef.current.value) ? (
            dispatch(addTodo({
                title: inputRef.current.value,
                id: uuidv4(),
                isDone: false
            }))
        ) : notValue()

        formRef.current.reset()
    }
    function notValue() {
        alert("input not has write")
    }

    return (
        <div className="card-body">
            <form className="my-2" onSubmit={handleSubmit} ref={formRef}>
                <div className="d-flex justify-content-between align-items-center">
                    <input
                        ref={inputRef}
                        type="text"
                        className="form-control me-2"
                        id="exampleFormControlInput1"
                        placeholder="e.g. Listeaning BBC podcast"
                        autoComplete="off" />
                    <button className="btn btn-success input-block-level">Add</button>
                </div>
            </form>
        </div>
    )
}