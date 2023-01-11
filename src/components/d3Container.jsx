import React, { useEffect, useRef } from "react";
import * as randomSearch from "../experiments/randomSearch";
import { runForceGraph } from "../experiments/graphGenerator";


const ForceGraph = ({ noOfNodes, noOfLinks }) => {
    const containerRef = useRef(null);
    let changePointer;

    useEffect(() => {
        const { nodes, links } = randomSearch.generateDirectedNodesAndLinks(noOfNodes, noOfLinks);
        if (containerRef.current) {
            changePointer = runForceGraph(
                containerRef.current,
                links,
                nodes,
                {
                    color: "#FFFF66",
                    radius: 26,
                }
            );
            randomSearch.randomSearch(nodes, links, nodes[3].id, nodes[4].id, changePointer);
        }

    }, [noOfNodes, noOfLinks]);

    return <div ref={containerRef} className="h-full" />;
};

export default ForceGraph;
