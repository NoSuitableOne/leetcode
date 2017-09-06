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
    	let arr = this.toArray();
    	console.log(`LinkedList: ${arr}`);
    	return arr.toString();
    }

    toArray () {
    	let arr = [],
    	    position = 0,
    	    current = this.head;
    	while (position < this.length) {
    		arr.push(current.getDigital());
            current = current.nextNode;
            position++;
    	}
    	return arr;
    }
}

function addTwoNumbers (LinkedList1, LinkedList2) {
    let result = '',
        arr = [],
        ll = new LinkedList(),
        num1 = parseInt(LinkedList1.toArray().reverse().join('')),
        num2 = parseInt(LinkedList2.toArray().reverse().join(''));
        
    result = (num1 + num2).toString().split('').reverse().join('');
    for (let i of result) {
        let node = new Node(parseInt(i));
        ll.append(node);
    }
    return ll;
} 

let node2 = new Node(2),
    node3 = new Node(3),
    node4 = new Node(4),
    node5 = new Node(5),
    node6 = new Node(6),
    lList1 = new LinkedList(),
    lList2 = new LinkedList(),
    lList = new LinkedList();

lList1.append(node2);
lList1.append(node4);
lList1.append(node3);
lList2.append(node5);
lList2.append(node6);
lList2.append(node4);

lList = addTwoNumbers(lList1, lList2);
lList.toString();
