import React from "react";
import D3Container from "../components/d3Container";
import ControlPanel from "../pages/contolPanel";
import { generateDirectedNodesAndLinks } from "../experiments/randomSearch";

export default function Playground() {

    const [graph, graphChanged] = React.useState(false);
    let nodesAndLinks = generateDirectedNodesAndLinks(10, 20);


    const changeGraph = (noOfNodes, noOfLinks) => {
        nodesAndLinks = generateDirectedNodesAndLinks(noOfNodes, noOfLinks);
        graphChanged(!graph);
    }

    return (
        <>
            <ControlPanel nodesAndLinks={nodesAndLinks} changeGraph={changeGraph} ></ControlPanel>
            <div className="sm:w-2/3  h-screen">
                <D3Container nodesAndLinks={nodesAndLinks} />
            </div>
        </>
    );
}