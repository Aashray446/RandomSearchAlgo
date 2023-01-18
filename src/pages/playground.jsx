import React from "react";
import D3Container from "../components/d3Container";
import ControlPanel from "../pages/contolPanel";
import { generateDirectedNodesAndLinks, generateUndirectedNodesAndLinks } from "../experiments/randomSearch";

export default function Playground() {

    const [graphChoice, setGraphChoice] = React.useState(true);
    const [nodesAndLinks, setNodesAndLinks] = React.useState(generateUndirectedNodesAndLinks(10, 10));


    const changeGraph = (noOfNodes, noOfLinks) => {
        console.log("changeGraph");
        console.log(noOfNodes, noOfLinks);
        setNodesAndLinks(graphChoice ? generateUndirectedNodesAndLinks(noOfNodes, noOfLinks) : generateDirectedNodesAndLinks(noOfNodes, noOfLinks));
    }

    const changeGraphType = (e) => {
        setNodesAndLinks(e ? generateUndirectedNodesAndLinks(10, 10) : generateDirectedNodesAndLinks(10, 10));
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