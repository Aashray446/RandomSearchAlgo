export const generateDirectedNodesAndLinks = function (noOfNodes, noOfLinks) {

    let nodes = [];
    let links = [];

    for (let i = 0; i < noOfNodes; i++) {
        const c = String.fromCharCode(Math.floor(Math.random() * (122 - 65 + 1)) + 65);

        if (nodes.find(node => node.id === c)) {
            i--;
            continue;
        }

        nodes.push({ id: c });

    }

    for (let i = 0; i < noOfLinks; i++) {
        const source = nodes[Math.floor(Math.random() * nodes.length)].id;
        const target = nodes[Math.floor(Math.random() * nodes.length)].id;

        if (source == target) {
            i--;
            continue;
        }
        links.push({ source, target, value: Math.floor(Math.random() * 10) + 1 });
    }


    return { nodes, links };

}

export const generateUndirectedNodesAndLinks = function (noOfNodes, noOfLinks) {
    let nodes = [];
    let links = [];

    for (let i = 0; i < noOfNodes; i++) {
        const c = String.fromCharCode(Math.floor(Math.random() * (122 - 65 + 1)) + 65);

        if (nodes.find(node => node.id === c)) {
            i--;
            continue;
        }

        nodes.push({ id: c });

    }

    for (let i = 0; i < noOfLinks; i++) {
        const source = nodes[Math.floor(Math.random() * nodes.length)].id;
        const target = nodes[Math.floor(Math.random() * nodes.length)].id;

        // check if the relation exist
        if (source == target || links.find(link => (link.source === source && link.target === target) || (link.source === target && link.target === source))) {
            i--;
            continue;
        }

        const value = Math.floor(Math.random() * 10) + 1;
        links.push({ source, target, value: value });
        links.push({ source: target, target: source, value: value });
    }
    return { nodes, links };

}

export async function randomSearch(nodesData, linksData, startNode, targetNode) {
    let currentPoint = nodesData.findIndex(node => node.id === startNode);
    nodesData[currentPoint].startNode = true;
    let targetIndex = nodesData.findIndex(node => node.id === targetNode);
    let path = [];
    let pathFound = false;

    while (!pathFound) {
        path.push(nodesData[currentPoint].id);
        nodesData[currentPoint].active = true;
        await new Promise(resolve => setTimeout(resolve, 1500));
        if (currentPoint === targetIndex) {
            nodesData[currentPoint].targetNode = true;
            pathFound = true;
            return path;
        } else {
            // Selecting the links
            const links = linksData.filter(link => link.source.id === nodesData[currentPoint].id);

            links.map(link => link.selected = true)
            await new Promise(resolve => setTimeout(resolve, 1500))
            links.map(link => link.selected = false)

            if (links.length === 0) {
                nodesData[currentPoint].deadEnd = true;
                return false;
            }
            const randomLink = links[Math.floor(Math.random() * links.length)];
            randomLink.selected = true
            currentPoint = nodesData.findIndex(node => node.id === randomLink.target.id);
        }
    }
}



