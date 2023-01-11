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


        links.push({ source, target, value: Math.floor(Math.random() * 10) + 1 });
    }


    return { nodes, links };

}

export function randomSearch(nodesData, linksData, startNode, targetNode) {

    let currentPoint = nodesData.findIndex(node => node.id === startNode);
    let targetIndex = nodesData.findIndex(node => node.id === targetNode);
    let path = [];
    let pathFound = false;
    console.log(currentPoint, targetIndex);
    console.log(startNode, targetNode);

    (async () => {
        while (!pathFound) {

            path.push(nodesData[currentPoint].id);
            await new Promise(resolve => setTimeout(resolve, 2000));
            nodesData[currentPoint].active = true;
            if (currentPoint === targetIndex) {
                pathFound = true;
            } else {
                const links = linksData.filter(link => link.source.id === nodesData[currentPoint].id);

                if (links.length === 0) {
                    path = [];
                    path.push("No Path Found")
                    pathFound = true;
                    return;
                }
                const randomLink = links[Math.floor(Math.random() * links.length)];
                currentPoint = nodesData.findIndex(node => node.id === randomLink.target.id);
            }
        }
    })()
    console.log(path);
    return path;

}

