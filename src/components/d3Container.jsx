import React from "react";
import * as randomSearch from "../experiments/randomSearch";
import { runForceGraph } from "../experiments/graphGenerator";
// import styles from "./forceGraph.module.css";


class ForceGraph extends React.Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.state = {
            nodes: props.nodes,
            links: props.links,
        };
        this.destroyFn = () => { };
    }

    componentDidMount() {
        const { nodes, links } = randomSearch.generateDirectedNodesAndLinks(this.state.nodes, this.state.links);
        let destroyFn;
        if (this.containerRef.current) {
            const { destroy } = runForceGraph(this.containerRef.current, links, nodes, {
                color: "#FFFF66",
                radius: 26,
            });
            destroyFn = destroy;
        }
        console.log(this.containerRef.current);
        return destroyFn;
    }

    componentWillUnmount() {
        this.destroyFn();
    }

    render() {
        return <div ref={this.containerRef} className="h-full" />;
    }
}

export default ForceGraph;