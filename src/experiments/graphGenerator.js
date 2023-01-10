import * as d3 from 'd3';

export const runForceGraph = (container, linksData, nodesData, {
    color,
    radius,
}) => {

    if (container.innerHTML != "") {
        container.innerHTML = "";
    }

    const containerRect = container.getBoundingClientRect();
    const height = containerRect.height;
    const width = containerRect.width;

    const linkStrengthScale = d3.scaleLinear()
        .domain([0, d3.max(linksData, d => d.value)])
        .range([0, 1]);

    const forceX = d3.forceX().x(d => d.x).strength(0.01);
    const forceY = d3.forceY().y(d => d.y).strength(0.01);

    const simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(d => d.id).strength(d => linkStrengthScale(d.value / 20)))
        .force("charge", d3.forceManyBody().strength(-50))
        .force("center", d3.forceCenter())
        .force("x", forceX)
        .force("y", forceY);

    simulation.nodes(nodesData)
    simulation.force("link").links(linksData)

    const svg = d3
        .select(container)
        .append("svg")
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .call(d3.zoom().on("zoom", function () {
            svg.attr("transform", d3.event.transform);
        }));

    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(nodesData)
        .enter().append("g")
        .style("fill", color)
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    d3.selectAll("g.nodes g")
        .classed("active", d => d.active);

    node.append("circle")
        .attr("r", radius);

    node.append("text")
        .text(d => d.id)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "central")
        .attr("fill", "black");


    const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(linksData)
        .enter().append("line")
        .attr("stroke-width", 2) // Use the value property to set the stroke width
        .attr("marker-end", "url(#arrowhead)")
        .attr("stroke", "#999");

    // Define the arrowhead marker
    // Define the arrowhead marker
    const marker = svg.append("defs")
        .append("marker")
        .attr("id", "arrowhead")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 16)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto");

    marker.append("path")
        .attr("d", "M0,-5L10,0L0,5");

    function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(1).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }

    simulation.on("tick", () => {
        simulation.alpha(0.5);

        link
            .attr("x1", function (d) { return d.source.x; })
            .attr("y1", function (d) { return d.source.y; })
            .attr("x2", function (d) { return d.target.x; })
            .attr("y2", function (d) { return d.target.y; });

        node
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });
    });

    return {
        destroy: () => {
            simulation.stop();
        },
        nodes: () => {
            return svg.node();
        }
    };
}