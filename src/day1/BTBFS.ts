export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: (BinaryNode<number> | null)[] = [head]; //pretend this is a queue

    while (q.length) {
        const curr: BinaryNode<number> | null | undefined = q.shift();
        if (!curr) {
            continue;
        }

        if (curr.value === needle) {
            return true;
        }

        if (curr.left) {
            q.push(curr.left);
        }
        if (curr.right) {
            q.push(curr.right);
        }
    }

    return false;
}

// function dfs(head: BinaryNode<number>, needle: number): boolean {
//     const s: BinaryNode[] = [head] //a Stack
//     while (s.length) {
//         const node = s.pop();
//         if (node.value === needle) {
//             return true;
//         }

//         if (node.right) {
//             s.push(node.right)
//         }
//         if (node.left) {
//             s.push(node.left)
//         }
//     }
// }
