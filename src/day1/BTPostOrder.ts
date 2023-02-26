type BinaryNode<T> = {
    value: T;
    left: BinaryNode<number> | null;
    right: BinaryNode<number> | null;
};

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    walk(curr.left, path);

    walk(curr.right, path);
    path.push(curr.value);

    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
