import React, { useEffect, useRef } from "react";
import { runForceGraph } from "../experiments/graphGenerator";

const ForceGraph = ({ nodesAndLinks }) => {
    const containerRef = useRef(null);
    let changePointer;

    useEffect(() => {
        if (containerRef.current) {
            changePointer = runForceGraph(
                containerRef.current,
                nodesAndLinks.links,
                nodesAndLinks.nodes,
                {
                    color: "#FFFF66",
                    radius: 26,
                }
            );
        }

    }, [nodesAndLinks]);

    return <div ref={containerRef} className="h-full" />;
};

export default ForceGraph;
