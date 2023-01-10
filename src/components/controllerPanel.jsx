import Switch from "./mini/switch";

export default function ControllerPanel({ changeGraph }) {

    return (
        <div className="grid grid-cols-2 gap-10 tracking-widest p-5 bg-base-100 m-4">
            <Switch id={"toggle"} ></Switch>
            <button className="btn btn-primary" onClick={changeGraph} >Generate Random</button>
            <input type="number" className="input input-bordered input-accent bg-white" placeholder="Source Node" />
            <input type="number" className="input input-bordered input-accent bg-white col-span-full " placeholder="Destination Node" />
            <button className="btn btn-secondary">Find Path</button>
        </div>

    );
}
