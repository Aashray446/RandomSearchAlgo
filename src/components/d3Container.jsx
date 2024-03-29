import React, { useEffect, useRef } from "react";
import { runForceGraph } from "../experiments/graphGenerator";

const ForceGraph = ({ nodesAndLinks, graphType }) => {
    const containerRef = useRef(null);
    let changePointer;

    useEffect(() => {
        if (containerRef.current) {
            changePointer = runForceGraph(
                containerRef.current,
                nodesAndLinks.links,
                nodesAndLinks.nodes,
                {
                    color: "#808080",
                    radius: 26,
                    graphType: graphType ? "undirected" : "directed",
                }
            );
        }

    }, [nodesAndLinks]);

    return <div ref={containerRef} className="h-full" />;
};

export default ForceGraph;
