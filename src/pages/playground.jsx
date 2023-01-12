import React from "react";
import D3Container from "../components/d3Container";
import ControlPanel from "../pages/contolPanel";
import { generateDirectedNodesAndLinks, generateUndirectedNodesAndLinks } from "../experiments/randomSearch";

export default function Playground() {

    const [graph, graphChanged] = React.useState(false);
    const [graphChoice, setGraphChoice] = React.useState(true);

    let nodesAndLinks;
    graphChoice ? nodesAndLinks = generateUndirectedNodesAndLinks(5, 5) : nodesAndLinks = generateDirectedNodesAndLinks(5, 5);


    const changeGraph = (noOfNodes, noOfLinks) => {
        graphChoice ? nodesAndLinks = generateUndirectedNodesAndLinks(noOfNodes, noOfLinks) : nodesAndLinks = generateDirectedNodesAndLinks(noOfNodes, noOfLinks);
        graphChanged(!graph);
    }

    const changeGraphType = (e) => {
        setGraphChoice(e);
    }

    return (
        <>
            <ControlPanel nodesAndLinks={nodesAndLinks} changeGraphType={changeGraphType} changeGraph={changeGraph} ></ControlPanel>
            <div className="sm:w-2/3  h-screen">
                <D3Container graphType={graphChoice} nodesAndLinks={nodesAndLinks} />
            </div>
        </>
    );
}