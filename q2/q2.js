'use strict';

/* 
/* @params LinkedList1,LinkedList2
/* return LinkedList
*/

class Node {
    constructor (digital) {
        this.digital = digital;
        this.nextNode = null;
    }

    linkNextNode (node) {
    	if (node instanceof Node) {
            this.nextNode = node;
    	}
    }

    unlinkNextNode () {
        this.nextNode = null;
    }

    setDigital (digital) {
    	this.digital = digital;
    }

    getDigital () {
    	return this.digital;
    }
}

class LinkedList {
	constructor () {
        this.length = 0;
        this.head = null; 
	}

	append (node) {
		let current;
        if (!this.head) {
            this.head = node; 
        } else {
        	current = this.head;
            while (current.nextNode) {
                current = current.nextNode;  
            }
            current.nextNode = node;
        }
        this.length++;
	}

    getNode (index) {
        if (index > this.length) {
        	return 'undefined';
        }
        let position = index,
            current = this.head;
        while (position !== 0 ) {
            current = current.nextNode;
            position--;
        }
        return current;
    }

    setNode (index, digital) {
    	try {
            this.getNode(index).setDigital(digital);
    	} catch (e) {
    		throw e;
    	}
    }

    toString () {
    	let arr = [],
    	    position = 0,
    	    current = this.head;
    	while (position < this.length) {
    		arr.push(current.getDigital());
            current = current.nextNode;
            position++;
    	}
    	console.log(`LinkedList: ${arr}`);
    }
}


let node1 = new Node(100),
    node2 = new Node(200);
node1.linkNextNode(node2);

console.log(node1.getDigital());
node1.nextNode.setDigital(20)
console.log(node2.getDigital());

let ll = new LinkedList();
ll.append(node1);
ll.append(node2);
console.log(ll.getNode(0).getDigital());
console.log(ll.getNode(1).getDigital());
ll.setNode(1,33);
console.log(ll.getNode(1).getDigital());
ll.toString();

