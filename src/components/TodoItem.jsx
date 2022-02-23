export default  function TodoItem() {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">A second item</label>
            </div>
            <button className="btn btn-danger">x</button>
        </li>
    )
}