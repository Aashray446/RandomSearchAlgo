import Switch from "./mini/switch";
import { randomSearch } from "../experiments/randomSearch";
import { useState, useEffect } from "react";
export default function ControllerPanel({ changeGraph, nodesAndLinks }) {

    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');

    const handleSourceChange = (e) => {
        setSource(e.target.value);
    }

    const handleDestinationChange = (e) => {
        setDestination(e.target.value);
    }


    useEffect(() => {
        // console.log(nodesAndLinks);
    }, [nodesAndLinks])

    return (
        <div className="grid grid-cols-2 gap-10 tracking-widest p-5 bg-base-100 m-4">
            <Switch id={"toggle"} ></Switch>
            <button className="btn btn-primary" onClick={() => changeGraph(10, 15)} >Generate Random</button>
            <input type="text" value={source} onChange={handleSourceChange} className="input input-bordered input-accent bg-white" placeholder="Source Node" />
            <input type="text" value={destination} onChange={handleDestinationChange} className="input input-bordered input-accent bg-white col-span-full " placeholder="Destination Node" />
            <button className="btn btn-secondary" onClick={() => randomSearch(nodesAndLinks.nodes, nodesAndLinks.links, source, destination)}>Find Path</button>
        </div>

    );
}
