class SinglyLinkedNode {
    val: any;
    next: null | SinglyLinkedNode;
    constructor(val: any) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList<T> {
    head: null | SinglyLinkedNode;
    tail: null | SinglyLinkedNode;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: T): SinglyLinkedList<T> {
        const newNode = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            const tail = <SinglyLinkedNode>this.tail;
            tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(): SinglyLinkedNode | null {
        if (!this.head) {
            return null;
        }
        let tailNode = this.head;
        let newTail = tailNode;
        while (tailNode.next) {
            newTail = tailNode;
            tailNode = tailNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = null;
        }
        return tailNode;
    }

    shift(): SinglyLinkedNode | null {
        if (!this.head) {
            return null;
        }
        let headNode = this.head;
        this.head = this.head.next;
        this.length - 1;
        if (this.length === 0) {
            this.tail = null;
        }
        return headNode;
    }

    unshift(val: T): SinglyLinkedList<T> {
        const newNode = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index: number): SinglyLinkedNode | null {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = <SinglyLinkedNode>this.head;
        while (index > 0) {
            current = <SinglyLinkedNode>current.next;
            index--;
        }
        return current;
    }

    set(index: number, val: any): boolean {
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
        const newNode = new SinglyLinkedNode(val);
        const prev = <SinglyLinkedNode>this.get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index: number): SinglyLinkedNode | null {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        const pre = <SinglyLinkedNode>this.get(index - 1);
        const removed = <SinglyLinkedNode>pre.next;
        pre.next = removed.next;
        this.length--;
        return removed;
    }

    reverse(): SinglyLinkedList<T> {
        let node = <SinglyLinkedNode>this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = <SinglyLinkedNode>node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current?.next;
        }
    }
}
