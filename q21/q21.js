/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists (l1, l2) {
    let node,
        position;

    if (l1.val < l2.val) {
        node = l1;
        l1 = l1.next;
    } else {
        node = l2;
        l2 = l2.next;
    }

    position = node;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            node.next = l1;
            l1 = l1.next;
        } else {
            node.next = l2;
            l2 = l2.next;
        }
        node = node.next;
    }

    if (l1 === null && l2 !== null) {
        node.next = l2;
    }

    if (l1 !== null && l2 === null) {
        node.next = l1;
    }

    node = position;
    return node;
}

let node1 = new ListNode(1),
    node2 = new ListNode(2),
    node3 = new ListNode(3),
    node4 = new ListNode(4),
    node5 = new ListNode(5);

node1.next = node3;
node3.next = node5;

node2.next = node4;

let result = mergeTwoLists (node1, node2);
console.log(result);
