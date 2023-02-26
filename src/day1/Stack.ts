type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        const newHead = {
            value: item,
        } as Node<T>;
        if (this.head) {
            const currHead = this.head;
            newHead.prev = currHead;
        }
        this.head = newHead;
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const head = this.head;
        this.head = head.prev;
        this.length--;
        head.prev = undefined;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
