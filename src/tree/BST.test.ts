import { BinarySearchTree, TreeNode } from './BST';
describe('BST jest', () => {
    let tree: BinarySearchTree;
    beforeEach(() => {
        tree = new BinarySearchTree();
        tree.insert(10);
        tree.insert(5);
        tree.insert(13);
        tree.insert(11);
        tree.insert(12);
        tree.insert(16);
        tree.insert(7);
    });

    it(`BST find and contain`, () => {
        expect(tree.find(10)).toBeTruthy();
        expect(tree.find(2)).toBeFalsy();
        expect(tree.contain(10)).toBeTruthy();
        expect(tree.contain(2)).toBeFalsy();
    });

    it(`BST traversal`, () => {
        expect(tree.BFS()).toEqual([10, 5, 13, 7, 11, 16, 12]);
        expect(tree.DFSPreOrder()).toEqual([10, 5, 7, 13, 11, 12, 16]);
        expect(tree.DFSInOrder()).toEqual([5, 7, 10, 11, 12, 13, 16]);
        expect(tree.DFSPostOrder()).toEqual([7, 5, 12, 11, 16, 13, 10]);
    });
});
