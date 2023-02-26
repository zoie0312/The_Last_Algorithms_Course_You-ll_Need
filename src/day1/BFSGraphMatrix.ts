export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);
    const q: number[] = [source];

    //seen[source] = true;
    while (q.length) {
        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }
        const adjacency = graph[curr];
        for (let i = 0; i < adjacency.length; i++) {
            const next = adjacency[i];
            if (next === 0) {
                continue;
            }
            if (seen[i]) {
                continue;
            }

            q.push(i);
            prev[i] = curr;
            seen[curr] = true;
        }
    }

    if (prev[needle] === -1) {
        return null;
    }
    const out = [];
    let curr = needle;
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }
    out.push(source);
    return out.reverse();
}
