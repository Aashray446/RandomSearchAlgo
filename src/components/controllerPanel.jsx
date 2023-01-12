import Switch from "./mini/switch";
import { randomSearch } from "../experiments/randomSearch";
import { useState, useEffect } from "react";
export default function ControllerPanel({ changeGraph, nodesAndLinks }) {

    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [path, setPath] = useState();
    const handleSourceChange = (e) => {
        setSource(e.target.value);
    }

    const handleDestinationChange = (e) => {
        setDestination(e.target.value);
    }

    const startSearch = async (nodes, links, source, destination) => {
        const result = await randomSearch(nodes, links, source, destination)

        if (result) {
            setPath(result);
            return;
        }
        window.alert("Path not found");
    }


    useEffect(() => {

        setPath();
        setSource('');
        setDestination('');
    }, [nodesAndLinks])

    return (
        <div className="grid grid-cols-2 gap-10 tracking-widest p-5 bg-base-100 m-4">
            <Switch id={"toggle"} ></Switch>
            <button className="btn btn-primary" onClick={() => changeGraph(10, 15)} >Generate Random</button>
            <input type="text" value={source} onChange={handleSourceChange} className="input input-bordered input-accent bg-white" placeholder="Source Node" />
            <input type="text" value={destination} onChange={handleDestinationChange} className="input input-bordered input-accent bg-white col-span-full " placeholder="Destination Node" />
            <button className="btn btn-secondary" onClick={() => startSearch(nodesAndLinks.nodes, nodesAndLinks.links, source, destination)}>Find Path</button>
            {
                path ? <div >
                    <h6 className="font-bold tracking-wide">Path Found</h6>
                    {path && path.map((node, index) => {
                        return <span className="text-lg text-accent pr-2" key={index}>{node} {index != path.length - 1 ? '-->' : ''}</span>
                    })}
                </div> : null
            }
        </div>

    );
}
