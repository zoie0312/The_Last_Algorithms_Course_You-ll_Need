type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        //this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode = {
            value: item,
            next: this.head,
        };
        //item.next = this.head;
        this.head = newNode;
        this.length += 1;
    }
    insertAt(item: T, idx: number): void {
        if (idx < this.length) {
        }
    }
    append(item: T): void {
        this.tail.next = item;
        this.tail = item;
        this.length += 1;
    }
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined;
        } else {
            let curr = this.head;
            for (let i = 0; i <= idx; i++) {
                curr = curr.next;
            }
            return curr.value;
        }
    }
    removeAt(idx: number): T | undefined {}
}
