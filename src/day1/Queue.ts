type QNode<T> = {
    value: T;
    next?: QNode<T>;
};
export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        const newNode = {
            value: item,
            next: undefined,
        };
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    deque(): T | undefined {
        if (this.head) {
            this.length--;
            const curHead = this.head;
            this.head = curHead.next;
            if (this.length === 0) {
                this.tail = undefined;
            }
            curHead.next = undefined;
            return curHead.value;
        } else {
            return undefined;
        }
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
