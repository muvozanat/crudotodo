import { useSelector } from "react-redux"

export default function TodoFooter() {
    const todeItems = useSelector(state => state.todos)
    const handleSave = () => {
        localStorage.setItem('todos', JSON.stringify(todeItems))

    }
    return (
        <div className="card-footer d-grid">
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>)
}