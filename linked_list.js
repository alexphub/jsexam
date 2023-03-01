var Node = require("./node");

class LinkedList {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    getRoot() {
        return this.root;
    }

    addLast(value) {
        const node = new Node(value);
        if (this.root) {
            let currentNode = this.root;
            while (currentNode && currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        else {
            this.root = node;
        }
    }

    revertList() {
        if (this.root) {
            let stack = [];
            let currentNode = this.root;
            while (currentNode) {
                stack.push(currentNode.nodeValue);
                currentNode = currentNode.next;
            }

            this.root = null;
            let val = stack.pop();
            while (val) {
                this.addLast(val);
                val = stack.pop();
            }
        }
    }

    show () {
        if (this.root) {
            let currentNode = this.root;
            while (currentNode) {
                console.log('=>', currentNode.nodeValue);
                currentNode = currentNode.next;
            }
        }
    }
}

module.exports = LinkedList;
