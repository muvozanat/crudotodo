export default function TodoHeader({ length }) {
    return (<div className="card-header">
        <h3 >
            Today Plans: {length}
        </h3>
    </div>)
}