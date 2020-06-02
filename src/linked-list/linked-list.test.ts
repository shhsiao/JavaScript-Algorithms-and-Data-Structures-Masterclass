import { DoublyLinkedList } from './doubly-linked-list';
import { SinglyLinkedList } from './singly-linked-list';

describe('SinglyLinkedList jest', () => {
    let linkedList: SinglyLinkedList<number>;
    beforeEach(() => {
        linkedList = new SinglyLinkedList();
        linkedList.push(0);
        linkedList.push(1);
    });
    it(`SinglyLinedList push`, () => {
        linkedList.push(2);
        expect(linkedList.length).toBe(3);
        expect(linkedList.traverse()).toEqual([0, 1, 2]);
    });
    it(`SinglyLinedList pop`, () => {
        linkedList.pop();
        linkedList.pop();
        linkedList.pop();
        expect(linkedList.length).toBe(0);
        expect(linkedList.traverse()).toEqual([]);
    });
    it(`SinglyLinedList shift`, () => {
        linkedList.shift();
        expect(linkedList.traverse()).toEqual([1]);
        linkedList.shift();
        linkedList.shift();
        expect(linkedList.traverse()).toEqual([]);
    });
    it(`SinglyLinedList unshift`, () => {
        linkedList.unshift(2);
        expect(linkedList.length).toBe(3);
        expect(linkedList.traverse()).toEqual([2, 0, 1]);
        linkedList.head = null;
        linkedList.unshift(2);
        expect(linkedList.traverse()).toEqual([2]);
    });
    it(`SinglyLinedList get`, () => {
        expect(linkedList.get(1)?.val).toBe(1);
        expect(linkedList.get(100)?.val).toBeUndefined();
    });
    it(`SinglyLinedList set`, () => {
        linkedList.set(0, 6);
        linkedList.set(100, 6);
        expect(linkedList.traverse()).toEqual([6, 1]);
    });
    it(`SinglyLinedList insert`, () => {
        linkedList.insert(0, -1);
        expect(linkedList.traverse()).toEqual([-1, 0, 1]);
        linkedList.insert(6, 3);
        expect(linkedList.traverse()).toEqual([-1, 0, 1]);
        linkedList.insert(3, 2);
        expect(linkedList.traverse()).toEqual([-1, 0, 1, 2]);
        linkedList.insert(2, 0.5);
        expect(linkedList.traverse()).toEqual([-1, 0, 0.5, 1, 2]);
    });
    it(`SinglyLinedList remove`, () => {
        linkedList.push(2);
        linkedList.push(3);
        linkedList.remove(100);
        linkedList.remove(3);
        expect(linkedList.traverse()).toEqual([0, 1, 2]);
        linkedList.remove(1);
        expect(linkedList.traverse()).toEqual([0, 2]);
        linkedList.remove(0);
        expect(linkedList.traverse()).toEqual([2]);
    });
    it(`SinglyLinedList reverse`, () => {
        linkedList.reverse();
        expect(linkedList.traverse()).toEqual([1, 0]);
    });
});

describe('DoubluLinkedList jest', () => {
    let linkedList: DoublyLinkedList<number>;
    beforeEach(() => {
        linkedList = new DoublyLinkedList();
        linkedList.push(0);
        linkedList.push(1);
    });
    it(`DoubluLinkedList push`, () => {
        linkedList.push(2);
        expect(linkedList.length).toBe(3);
    });
    it(`DoubluLinkedList pop`, () => {
        linkedList.pop();
        expect(linkedList.length).toBe(1);
        linkedList.pop();
        linkedList.pop();
        expect(linkedList.length).toBe(0);
    });
    it(`DoubluLinkedList shift`, () => {
        linkedList.shift();
        expect(linkedList.length).toBe(1);
        linkedList.shift();
        linkedList.shift();
        expect(linkedList.length).toBe(0);
    });
    it(`DoubluLinkedList unshift`, () => {
        linkedList.unshift(2);
        expect(linkedList.length).toBe(3);
        linkedList = new DoublyLinkedList();
        linkedList.unshift(2);
        expect(linkedList.length).toBe(1);
    });
    it(`DoubluLinkedList get`, () => {
        linkedList.push(2);
        linkedList.push(3);
        linkedList.push(4);
        expect(linkedList.get(1)?.val).toBe(1);
        expect(linkedList.get(3)?.val).toBe(3);
        expect(linkedList.get(10)?.val).toBeUndefined();
    });
    it(`DoubluLinkedList set`, () => {
        linkedList.set(100,4);
        linkedList.set(1,3);
        expect(linkedList.length).toBe(2); 
        expect(linkedList.traverse()).toEqual([0,3]); 
    });
    it(`DoubluLinkedList insert`, () => {
        linkedList.insert(0, -1);
        expect(linkedList.traverse()).toEqual([-1, 0, 1]);
        linkedList.insert(6, 3);
        expect(linkedList.traverse()).toEqual([-1, 0, 1]);
        linkedList.insert(3, 2);
        expect(linkedList.traverse()).toEqual([-1, 0, 1, 2]);
        linkedList.insert(2, 0.5);
        expect(linkedList.traverse()).toEqual([-1, 0, 0.5, 1, 2]); 
    });
    it(`DoubluLinkedList remove`, () => {
        linkedList.push(2);
        linkedList.push(3);
        linkedList.remove(100);
        linkedList.remove(3);
        expect(linkedList.traverse()).toEqual([0, 1, 2]);
        linkedList.remove(1);
        expect(linkedList.traverse()).toEqual([0, 2]);
        linkedList.remove(0);
        expect(linkedList.traverse()).toEqual([2]);
    });
});
