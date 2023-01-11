import Switch from "./mini/switch";
import { randomSearch } from "../experiments/randomSearch";
import { useEffect } from "react";
export default function ControllerPanel({ changeGraph, nodesAndLinks }) {

    useEffect(() => {
        // console.log(nodesAndLinks);
    }, [nodesAndLinks])

    return (
        <div className="grid grid-cols-2 gap-10 tracking-widest p-5 bg-base-100 m-4">
            <Switch id={"toggle"} ></Switch>
            <button className="btn btn-primary" onClick={() => changeGraph(10, 15)} >Generate Random</button>
            <input type="number" className="input input-bordered input-accent bg-white" placeholder="Source Node" />
            <input type="number" className="input input-bordered input-accent bg-white col-span-full " placeholder="Destination Node" />
            <button className="btn btn-secondary" onClick={() => randomSearch(nodesAndLinks.nodes, nodesAndLinks.links, nodesAndLinks.nodes[0].id, nodesAndLinks.nodes[5].id)}>Find Path</button>
        </div>

    );
}
