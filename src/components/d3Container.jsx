import React, { useEffect, useRef } from "react";
import * as randomSearch from "../experiments/randomSearch";
import { runForceGraph } from "../experiments/graphGenerator";


const ForceGraph = ({ noOfNodes, noOfLinks }) => {
    const containerRef = useRef(null);


    useEffect(() => {
        const { nodes, links } = randomSearch.generateDirectedNodesAndLinks(noOfNodes, noOfLinks);
        if (containerRef.current) {
            runForceGraph(
                containerRef.current,
                links,
                nodes,
                {
                    color: "#FFFF66",
                    radius: 26,
                }
            );
        }
    }, [noOfNodes, noOfLinks]);

    return <div ref={containerRef} className="h-full" />;
};

export default ForceGraph;
