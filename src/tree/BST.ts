class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: TreeNode | null = null;
    constructor() {}

    insert(value: number) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root as TreeNode;
        while (true) {
            if (value === current.value) {
                return null;
            }
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }

    find(value: number) {
        if (!this.root) {
            return false;
        }
        let current: TreeNode | null = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return current;
    }

    constain(value: number) {
        if (!this.root) {
            return false;
        }
        let current: TreeNode | null = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS() {
        let node = this.root as TreeNode;
        const data: number[] = [],
            queue: TreeNode[] = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift() as TreeNode;
            data.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }

    DFSPreOrder() {
        const data: number[] = [];
        const traverse = (node: TreeNode) => {
            data.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        };
        traverse(this.root as TreeNode);
        return data;
    }

    DFSPostOrder() {
        const data: number[] = [];
        const traverse = (node: TreeNode) => {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            data.push(node.value);
        };
        traverse(this.root as TreeNode);
        return data;
    }

    DFSInOrder() {
        const data: number[] = [];
        const traverse = (node: TreeNode) => {
            if (node.left) {
                traverse(node.left);
            }
            data.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        };
        traverse(this.root as TreeNode);
        return data;
    }
}
