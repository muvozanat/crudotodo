export default function TodoForm() {
    return (
        <div className="card-body">
            <form className="my-2">
                <div className="d-flex justify-content-between align-items-center">
                    <input type="text" className="form-control me-2" id="exampleFormControlInput1" placeholder="e.g. Listeaning BBC podcast" autoComplete="off" />
                    <button className="btn btn-success">Add</button>
                </div>
            </form>
        </div>
    )
}