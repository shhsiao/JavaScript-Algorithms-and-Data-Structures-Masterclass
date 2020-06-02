class DoublyLinkedNode {
    val: any;
    next: null | DoublyLinkedNode;
    prev: null | DoublyLinkedNode;
    constructor(val: any) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList<T> {
    head: null | DoublyLinkedNode;
    tail: null | DoublyLinkedNode;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: T): DoublyLinkedList<T> {
        const newNode = new DoublyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            const tail = this.tail as DoublyLinkedNode;
            tail.next = newNode;
            newNode.prev = tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(): DoublyLinkedNode | null {
        if (!this.head) {
            return null;
        }
        const tailNode = this.tail as DoublyLinkedNode;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const preNode = tailNode.prev as DoublyLinkedNode;
            this.tail = preNode;
            this.tail.next = null;
            tailNode.prev = null;
        }
        this.length--;
        return tailNode;
    }

    shift(): DoublyLinkedNode | null {
        if (this.length === 0) {
            return null;
        }
        const oldHead = this.head as DoublyLinkedNode;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next as DoublyLinkedNode;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val: T): DoublyLinkedList<T> {
        const newNode = new DoublyLinkedNode(val);
        const oldHead = this.head as DoublyLinkedNode;
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = oldHead;
            oldHead.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index: number): DoublyLinkedNode | null {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index <= this.length / 2) {
            // working from start
            let count = 0;
            let current = this.head as DoublyLinkedNode;
            while (count !== index) {
                current = current.next as DoublyLinkedNode;
                count++;
            }
            return current;
        } else {
            // working from end
            let count = this.length - 1;
            let current = this.tail as DoublyLinkedNode;
            while (count !== index) {
                current = current.prev as DoublyLinkedNode;
                count--;
            }
            return current;
        }
    }

    set(index: number, val: T): boolean {
        const foundNode = this.get(index);
        if (!foundNode) {
            return false;
        }
        foundNode.val = val;
        return true;
    }

    insert(index: number, val: T): boolean {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.unshift(val);
        }
        if (index === this.length) {
            return !!this.push(val);
        }
        const newNode = new DoublyLinkedNode(val);
        const beforeNode = this.get(index - 1) as DoublyLinkedNode;
        const afterNode = beforeNode.next as DoublyLinkedNode;
        beforeNode.next = newNode;
        newNode.next = afterNode;
        newNode.prev = beforeNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index: number): DoublyLinkedNode | null {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        const removedNode = this.get(index) as DoublyLinkedNode;
        const beforeNode = removedNode.prev as DoublyLinkedNode;
        const afterNode = removedNode.next as DoublyLinkedNode;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.prev = null;
        removedNode.next = null;
        this.length--;
        return removedNode;
    }

    traverse(): Array<T> {
        let current = this.head;
        const valueList = [];
        while (current) {
            valueList.push(current.val);
            current = current?.next;
        }
        return valueList;
    }
}
