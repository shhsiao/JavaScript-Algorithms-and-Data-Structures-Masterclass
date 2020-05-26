class MaxBinaryHeap {
    valueList: number[];
    constructor() {
        this.valueList = [41, 39, 33, 18, 27, 12];
    }

    insert(element: number) {
        this.valueList.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.valueList.length - 1;
        const element = this.valueList[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.valueList[parentIdx];
            if (element <= parent) {
                break;
            }
            this.valueList[parentIdx] = element;
            this.valueList[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax() {
        if (this.valueList.length === 0) {
            console.log('The heap is empty.');
            return;
        }
        const max = this.valueList[0];
        const end = this.valueList.pop() as number;
        if (this.valueList.length !== 0) {
            this.valueList[0] = end;
            this.sinkDown();
            return;
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        const len = this.valueList.length;
        const element = this.valueList[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild, swap;
            if (leftChildIdx < len) {
                leftChild = this.valueList[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < len) {
                rightChild = this.valueList[rightChildIdx];
                if (
                    (!swap && rightChild > element) ||
                    (swap && rightChild > <number>leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (!swap) {
                break;
            }
            this.valueList[idx] = this.valueList[swap];
            this.valueList[swap] = element;
            idx = swap;
        }
    }
}

const heap = new MaxBinaryHeap();
heap.insert(60);
console.log(heap);
