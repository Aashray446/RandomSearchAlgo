
export default function Switch(props) {

    const handleChange = (e) => {
        props.changeGraphType(e.target.checked)
    }

    return (
        <label htmlFor={props.id} className="inline-flex col-span-full items-center p-2 rounded-md cursor-pointer">
            <input id={props.id} onChange={handleChange} type="checkbox" className="hidden peer" />
            <span className="px-4 py-2 text-center grow rounded-l-md bg-white peer-checked:bg-primary">Undirected</span>
            <span className="px-4 py-2 text-center grow rounded-r-md bg-primary peer-checked:bg-white">Directed Graph</span>
        </label>
    )
}