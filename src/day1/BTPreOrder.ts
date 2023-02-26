type BinaryNode<T> = {
    value: T;
    left: BinaryNode<number> | null;
    right: BinaryNode<number> | null;
};

function walk(curr: BinaryNode<number>, path: number[]): number[] {
    path.push(curr.value);

    if (curr.left) {
        walk(curr.left, path);
    }

    if (curr.right) {
        walk(curr.right, path);
    }

    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    let path: number[] = [];
    return walk(head, path);
    //return path;
}

// export default function pre_order_search(head: BinaryNode<number>): number[] {
//     const path: number[] = [];
//     const s: BinaryNode<number>[] = [head]; //a Stack

//     while (s.length) {
//         const node = s.pop();
//         if (node) {
//             path.push(node.value);
//         }

//         if (node && node.right) {
//             s.push(node.right);
//         }
//         if (node && node.left) {
//             s.push(node.left);
//         }
//     }

//     return path;
// }
