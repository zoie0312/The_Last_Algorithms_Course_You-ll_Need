function hasUnvisted(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, idx) => !s && dists[idx] < Infinity);
}

function getLowestU(seen: boolean[], dists: number[]): number {
    let idx = -1;
    let lo = Infinity;
    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }
        if (dists[i] < lo) {
            lo = dists[i];
            idx = i;
        }
    }
    return idx;
}

// export default function dijkstra_list(
//     source: number,
//     sink: number,
//     arr: WeightedAdjacencyList,
// ): number[] {
//     const seen: boolean[] = new Array(arr.length).fill(false);
//     const prev: number[] = new Array(arr.length).fill(-1);
//     const dists: number[] = new Array(arr.length).fill(Infinity);

//     dists[source] = 0;
//     while (hasUnvisted(seen, dists)) {
//         const curr = getLowestU(seen, dists);
//         seen[curr] = true;

//         const adjacency = arr[curr];
//         for (let i = 0; i < adjacency.length; i++) {
//             const { to, weight } = adjacency[i];
//             const dist = dists[curr] + weight;
//             if (dist < dists[to]) {
//                 dists[to] = dist;
//                 prev[to] = curr;
//             }
//         }
//     }

//     const out = [];
//     let curr = sink;
//     while (prev[curr] !== -1) {
//         out.push(curr);
//         curr = prev[curr];
//     }
//     out.push(source);
//     return out.reverse();
// }

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// implementation wiht a minHeap => nlog(n)

interface Node {
    idx: number;
    dist: number;
}

function getParent(idx: number): number {
    return Math.floor((idx - 1) / 2);
}

function leftChild(idx: number): number {
    return idx * 2 + 1;
}

function rightChild(idx: number): number {
    return idx * 2 + 2;
}

function insert(heap: Node[], idx: number, dist: number): void {
    heap.push({
        idx,
        dist,
    });
    heapifyUp(heap, heap.length - 1);
}

function remove(heap: Node[]): Node | undefined {
    if (heap.length === 0) {
        return;
    }
    const first = heap[0];
    if (heap.length === 1) {
        //heap = [];
        heap.pop();
        return first;
    }
    const last = heap[heap.length - 1];
    heap[0] = {
        idx: last.idx,
        dist: last.dist,
    };
    heap.pop();
    heapifyDown(heap, 0);
    return first;
}

function heapifyUp(heap: Node[], idx: number): void {
    if (idx === 0) {
        return;
    }

    const parentIdx: number = getParent(idx);
    const parent: Node = heap[parentIdx];
    const curr = heap[idx];
    if (parent.dist > curr.dist) {
        heap[parentIdx] = {
            idx: curr.idx,
            dist: curr.dist,
        };
        heap[idx] = {
            idx: parent.idx,
            dist: parent.dist,
        };
        heapifyUp(heap, parentIdx);
    }
}

function heapifyDown(heap: Node[], idx: number): void {
    const leftIdx = leftChild(idx);
    const rightIdx = rightChild(idx);
    const curr = heap[idx];

    if (leftIdx >= heap.length) {
        return;
    }

    if (leftIdx === heap.length - 1) {
        //left only, no right
        const left = heap[leftIdx];
        if (curr.dist > left.dist) {
            heap[idx] = {
                idx: left.idx,
                dist: left.dist,
            };
            heap[leftIdx] = {
                idx: curr.idx,
                dist: curr.dist,
            };
        }
        return;
    }

    const right = heap[rightIdx];
    const left = heap[leftIdx];
    const min = Math.min(curr.dist, left.dist, right.dist);
    if (curr.dist !== min) {
        if (min === left.dist) {
            heap[idx] = {
                idx: left.idx,
                dist: left.dist,
            };
            heap[leftIdx] = {
                idx: curr.idx,
                dist: curr.dist,
            };
            heapifyDown(heap, leftIdx);
        } else {
            heap[idx] = {
                idx: right.idx,
                dist: right.dist,
            };
            heap[rightIdx] = {
                idx: curr.idx,
                dist: curr.dist,
            };
            heapifyDown(heap, rightIdx);
        }
    }
}

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    //const seen: boolean[] = new Array(arr.length).fill(false);
    const prev: number[] = new Array(arr.length).fill(-1);
    const dists: number[] = new Array(arr.length).fill(Infinity);

    dists[source] = 0;
    let heap: Node[] = [
        {
            idx: source,
            dist: 0,
        },
    ];
    while (heap.length) {
        const curr = remove(heap) as Node;
        //seen[curr] = true;
        //console.log("heap ", heap[0]);
        if (curr) {
            const adjacency = arr[curr.idx];
            for (let i = 0; i < adjacency.length; i++) {
                const { to, weight } = adjacency[i];
                const dist = curr.dist + weight;
                if (dist < dists[to]) {
                    dists[to] = dist;
                    prev[to] = curr.idx;
                    insert(heap, to, dist);
                }
            }
        }
    }

    const out = [];
    let curr = sink;
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }
    out.push(source);
    return out.reverse();
}
