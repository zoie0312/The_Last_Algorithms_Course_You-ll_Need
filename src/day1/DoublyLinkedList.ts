type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;
        const newNode = {
            value: item,
        } as Node<T>;
        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = this.tail = newNode;
        }
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("oh oh...");
        } else if (idx === 0) {
            this.prepend(item);
        } else if (idx === this.length) {
            this.append(item);
        }

        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        curr = curr as Node<T>;
        // let i = 0;
        // do {
        //     if (i === idx) {
        //         break;
        //     }
        //     i++;
        //     if (curr) {
        //         curr = curr.next;
        //     }
        // } while (curr && i < this.length);

        // if (!curr) {
        //     return;
        // }

        const newNode = {
            value: item,
        } as Node<T>;
        // if (i === 0) {
        //     this.head = newNode;
        // }
        // if (i === this.length - 1) {
        //     this.tail = newNode;
        // }
        this.length++;
        newNode.prev = curr.prev;
        curr.prev = newNode;
        newNode.next = curr;
    }
    append(item: T): void {
        this.length++;
        const newNode = {
            value: item,
        } as Node<T>;
        if (this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = this.tail = newNode;
        }
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        let i = 0;
        do {
            if (curr && curr.value === item) {
                break;
            }
            i++;
            if (curr) {
                curr = curr.next;
            }
        } while (curr && i < this.length);

        if (!curr) {
            return;
        }

        if (i === 0) {
            if (this.head) {
                this.head = this.head.next;
            }
        }
        if (i === this.length - 1) {
            if (this.tail) {
                this.tail = this.tail.prev;
            }
        }

        this.length--;
        if (curr.prev) {
            curr.prev.next = curr.next;
        }
        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        curr.prev = curr.next = undefined;

        return curr.value;
    }
    get(idx: number): T | undefined {
        if (idx >= this.length) {
            return;
        }

        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        curr = curr as Node<T>;
        // let i = 0;
        // do {
        //     if (i === idx) {
        //         break;
        //     }
        //     i++;
        //     if (curr) {
        //     curr = curr.next ;
        //     }
        // } while (curr && i < this.length);

        // if (!curr) {
        //     return;
        // }

        return curr.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx >= this.length) {
            return;
        }

        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        curr = curr as Node<T>;

        // let i = 0;
        // do {
        //     if (i === idx) {
        //         break;
        //     }
        //     i++;
        //     if (curr) {
        //         curr = curr.next;
        //     }
        // } while (curr && i < this.length);

        // if (!curr) {
        //     return;
        // }

        if (idx === 0) {
            if (this.head) {
                this.head = this.head.next;
            }
        }
        if (idx === this.length - 1) {
            if (this.tail) {
                this.tail = this.tail.prev;
            }
        }
        this.length--;

        if (curr.prev) {
            curr.prev.next = curr.next;
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        curr.prev = curr.next = undefined;

        return curr.value;
    }

    //private getAt(idx: number): Node<T> | undefined {}
}
