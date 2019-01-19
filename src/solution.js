const solution = (graph, start, finish) => {
    const distances = {},
        paths = {},
        unvisited = [];
    for (let node in graph) {
        distances[node] = node === start ? 0 : Infinity;
        paths[node] = [];
        // if (node !== start)
        unvisited.push(node)
    }

    while (unvisited.length > 0) {
        const minNode = unvisited.sort((a, b) => {
            distances[a] > distances[b] ? -1 : 1;
        })[0];
        // console.log(minNode);
        // unvisited.indexOf()

        unvisited.splice(unvisited.indexOf(minNode) , 1)
        if (minNode === finish) {
            console.log('finishhhh');

            return {
                distance: distances[finish],//90;
                path: [finish, ...paths[finish], start].reverse() //['start', 'A', 'D', 'finish'];
            }
        } else {
            for (let n in graph[minNode]) {
                console.log(distances[n], distances[minNode] , graph[minNode][n]);
                if (distances[n] > distances[minNode] + graph[minNode][n]) {
                    distances[n] = distances[minNode] + graph[minNode][n]
                    paths[n].push(minNode)
                    console.log("+", distances[n], distances[minNode] , graph[minNode][n])
                }
            }
        }
        // for (let u in graph) {
        //     U.push(u)
        //     if (U.indexOf(u) > -1)
        //         console.log(u, 'dfsdfsd');
        //     d[u] = u === start ? 0 : Infinity;
        //     p[u] = [];
        // }
        //
    }

    // return {
    //     distance: distances[finish],//90;
    //     path: paths[finish] //['start', 'A', 'D', 'finish'];
    // }
    // Ваше решение
};

// const sol =
//     solution({
//             start: {A: 50, B: 20},
//             A: {C: 40, D: 20},
//             B: {A: 90, D: 90},
//             C: {D: 160, finish: 50},
//             D: {finish: 20},
//             finish: {}
//         }, 'start', 'finish',
//     );
// console.log(sol);