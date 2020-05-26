class PriorityNode {
    val: string;
    priority: number;
    constructor(val: string, priority: number) {
        this.val = val;
        this.priority = priority;
    }
}
// min binary heap
class PriorityQueue {
    priorityList: PriorityNode[];
    constructor() {
        this.priorityList = [];
    }
    enqueue(val: string, priority: number) {
        const node = new PriorityNode(val, priority);
        this.priorityList.push(node);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.priorityList.length - 1;
        const element = this.priorityList[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.priorityList[parentIdx];
            if (element.priority >= parent.priority) {
                break;
            }
            this.priorityList[parentIdx] = element;
            this.priorityList[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        if (this.priorityList.length === 0) {
            console.log('The heap is empty.');
            return;
        }
        const min = this.priorityList[0];
        const end = this.priorityList.pop() as PriorityNode;
        if (this.priorityList.length !== 0) {
            this.priorityList[0] = end;
            this.sinkDown();
            return;
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const len = this.priorityList.length;
        const element = this.priorityList[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild, swap;
            if (leftChildIdx < len) {
                leftChild = this.priorityList[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < len) {
                rightChild = this.priorityList[rightChildIdx];
                if (
                    (!swap && rightChild.priority < element.priority) ||
                    (swap && rightChild.priority < <number>leftChild?.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (!swap) {
                break;
            }
            this.priorityList[idx] = this.priorityList[swap];
            this.priorityList[swap] = element;
            idx = swap;
        }
    }
}
