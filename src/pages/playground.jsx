import React from "react";
import D3Container from "../components/d3Container";
import ControlPanel from "../pages/contolPanel";

export default function Playground() {

    const [nodes, setNodes] = React.useState(10);

    const [links, setLinks] = React.useState(20);



    const changeGraph = () => {
        setNodes(nodes % 2 == 0 ? nodes + 1 : nodes - 1)
        setLinks(links % 2 == 0 ? links + 1 : links - 1)
    }

    return (
        <>
            <ControlPanel changeGraph={changeGraph} ></ControlPanel>
            <div className="sm:w-2/3  h-screen">
                <D3Container noOfNodes={nodes} noOfLinks={links} />
            </div>
        </>
    );
}