function check(
    currA: BinaryNode<number> | null,
    currB: BinaryNode<number> | null,
): boolean {
    if (currA === null && currB === null) {
        return true;
    }

    if (currA && currB && currA.value === currB.value) {
        if (check(currA.left, currB.left) && check(currA.right, currB.right)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    return check(a, b);
}

export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    //structual check
    if (a === null && b === null) {
        return true;
    }
    //structual check
    if (a === null || b === null) {
        return false;
    }
    //value check
    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
