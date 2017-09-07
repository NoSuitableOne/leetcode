'use strict';

/**
/* @params str, reg  
/* @return boolean 
**/
class Node {
	constructor (content) {
        this.content = content;
        this.next = null;
        this.previous = null;
	}

	linktNext (node) {
        this.next = node;
	}

	linkPrevious (node) {
        this.previous = node;
	}
}

class Linkedlist {
    constructor () {
        this.length = 0;
        this.head = null;
        this.tail = null;
	}
    
    append (node) {
        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.length++;
    }
    //todo
    unshift () {
    	let node = new Node(this.head.content);
    	if (this.head.next) {
    	    this.head = this.head.next;
    	    this.head.previous.next = null;
    	    this.head.previous = null;
    	} else {
            this.head = null;
    	}
    	this.length--;    		
    	return node; 
    }

    show () {
    	if (!this.length) {
            return;
    	}
    	let position = this.head;
    	console.log('[start]')
    	while (position) {
            console.log(position.content + '-->');
            position = position.next;
    	}
    	console.log('[end]')
    }
}

function isMatch(str,reg) {
    let regTask = [],
        strLinkedlist,
        result;
    
    //registe task
    regTask = registerRegTask(reg);
    console.log(regTask);
    
    //put str in linkedlist
    strLinkedlist = linkedStr(str);
    strLinkedlist.show();

    //match
    result = doTask(regTask, strLinkedlist);

    return result;    
}

function registerRegTask (reg) {
	let arr = [];
	for (let i of reg) {
		if ( i !== '*') {
			arr.push(i);
		} else {
			arr[arr.length - 1] += '*';
		} 
	}
	return arr;
}

function linkedStr (str) {
	let strLinkedlist = new Linkedlist();
    for (let i of str) {
        let node = new Node(i);
        strLinkedlist.append(node);
    }
    return strLinkedlist;
}

function doTask (regTask, strLinkedlist) {
    let index = 0;
    for (let i of regTask) {
    	let result = false;
        
        if (i.length === 1 && i !== '.') {	
    		result = matchSingalWord(i, strLinkedlist);
    	    strLinkedlist.unshift();
    		console.log('str:' + strLinkedlist.head.content + ';singalweord:' + result);
        } else if (i === '.') {
    		console.log('/./');
    		result = matchDot(strLinkedlist);
    		strLinkedlist.unshift();
    		console.log('str:' + strLinkedlist.head.content + ';dot:' + result);
    	} else if (i.length === 2 && i !== '.*') {
    		i = i.replace('*', '');
    		console.log('/*/:' + i);
    		let baseLength = strLinkedlist.length;
    	    strLinkedlist = matchStar(i, strLinkedlist);
    	    strLinkedlist.show();
            result = true;
            result = checkNextDot(index, regTask, strLinkedlist, baseLength);
    	} else if (i === '.*') {
    		let baseContent = strLinkedlist.head.content,
    		    baseLength = strLinkedlist.length;
    		console.log('/.*/:' + i);
    		strLinkedlist = matchStar(baseContent, strLinkedlist);
    		result = true;            
            result = checkNextDot(index, regTask, strLinkedlist, baseLength);    		
    	}

    	if (!strLinkedlist.length && (index < regTask.length - 1)) {
            for (let j in regTask) {
            	if (j.length === 1) {
            		console.log("too more tasks false:" + index);
                    result = false;
            	}
            }  
    	}

        if (result) {
        	index++;
        	console.log('index:' +index)
        } else {
        	return result;
        }
    }
    console.log(strLinkedlist.length);
    if (strLinkedlist.length) {
        return false;
    }

    return true;
}

//four task case
function matchSingalWord (i, strLinkedlist) {
    let result = false;
    result = i === strLinkedlist.head.content ? true : false;
    return result;
}
function matchDot (strLinkedlist) {
	let result = false;
	result = strLinkedlist.head ? true : false;
	return result;
}
function matchStar (i, strLinkedlist) {
    while (strLinkedlist.length) {
        if (i !== strLinkedlist.head.content) {
        	break;
        }
        strLinkedlist.unshift();
    }
    return strLinkedlist;
}
function checkNextDot (index, regTask, strLinkedlist, baseLength) {
	let result = true;
	if (index < (regTask.length - 1) && regTask[index + 1] === '.') {
        result = baseLength > strLinkedlist.length? true : false;
    }
    return result;
}

console.log(isMatch('aabbbbbb', '..b.*.'));

//x*。b和xxb
//x*。和xx
//x*y*和xx