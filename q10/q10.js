'use strict';

/**
/* @params str, reg  
/* return boolean 
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
    	this.head = this.head.next;
    	this.head.previous.next = null;
    	this.head.previous = null;
    	this.length--;
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
    for (let i of regTask) {
    	let result = false,
    	    cache = [];
        
        if (i.length === 1 && i !== '.') {
    		if (!cache.length) {	
    		    result = matchSingalWord(i, strLinkedlist);
    	        strLinkedlist.unshift();
    		} else {
                let cachedLinkedlist = new Linkedlist();
                while (!strLinkedlist.length && !result) {
                    result = matchSingalWord(i, strLinkedlist);
                    cachedLinkedlist.append(strLinkedlist.unshift());
                }
    			while (cache.length) {
    				matchStar(cachedLinkedlist, cache[cache.length - 1]);
    			}
    		}
    		console.log('str:' + strLinkedlist.head.content + ';singalweord:' + result);
        } else if (i === '.') {
    		console.log('/./');
    		result = matchDot(strLinkedlist);
    		strLinkedlist.unshift();
    		console.log('str:' + strLinkedlist.head.content + ';dot:' + result);
    	} else if (i.length === 2 && i !== '.*') {
    		console.log('/*/:' + i);
    		cache.push(i);
    		continue;
    	} else if (i === '.*') {
    		console.log('/.*/:' + i);
    		//result = matchStar(i, strLinkedlist);
    	} 

        if (!result) {
        	return result;
        }
    }

    if (str.lenth) {
        return false;
    }

    return true;
}

//four task case
function matchSingalWord (i, strLinkedlist) {
    let result;
    console.log('i----' + i);
    result = i === strLinkedlist.head.content ? true : false;
    return result;
}
function matchDot (strLinkedlist) {
	let result;
	result = strLinkedlist.head ? true : false;
	return result;
}
function matchStar (strLinkedlist) {
    let result;

}
function matchDotStar (strLinkedlist) {

}
isMatch('aabbbbbb', 'a.b*.*e.');

//x*。b和xxb
//x*。和xx
//x*y*和xx