export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.length++;
        this.data.push(value);
        this.heapifyUp(this.length - 1);
    }
    delete(): number | undefined {
        if (this.length === 0) {
            return;
        }
        const firstV = this.data[0];
        if (this.length === 1) {
            this.length = 0;
            this.data = [];
            return firstV;
        }
        this.data[0] = this.data[this.length - 1];
        this.data.pop();
        this.length--;
        this.heapifyDown(0);
        return firstV;
    }

    // print(): void {
    //     console.log(this.data);
    // }
    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parentIdx = this.parent(idx);
        const parentV = this.data[parentIdx];
        const currV = this.data[idx];
        if (parentV > currV) {
            this.data[parentIdx] = currV;
            this.data[idx] = parentV;
            this.heapifyUp(parentIdx);
        }
    }

    private heapifyDown(idx: number): void {
        const left = this.leftChild(idx);
        const right = this.rightChild(idx);
        const currV = this.data[idx];

        if (left >= this.length) {
            return;
        }

        if (left === this.length - 1) {
            //left only, no right
            const leftV = this.data[left];
            if (currV > leftV) {
                this.data[idx] = leftV;
                this.data[left] = currV;
            }
            return;
        }

        const rightV = this.data[right];
        const leftV = this.data[left];
        const min = Math.min(currV, leftV, rightV);
        if (currV !== min) {
            if (min === leftV) {
                this.data[idx] = leftV;
                this.data[left] = currV;
                this.heapifyDown(left);
            } else {
                this.data[idx] = rightV;
                this.data[right] = currV;
                this.heapifyDown(right);
            }
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}

// 1 2**0
// 2 2**1
// 4 2**2
// 8 2**3
// 16 2**4

// 0
// 1 2
// 3 4 5 6
// 7 8 9 10 11 12 13 14
