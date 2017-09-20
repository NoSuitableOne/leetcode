/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor (val) {
        this.val = val;
        this.next = null;
    }

    linkNext (nextnode) {
        this.next = nextnode;
        return nextnode;
    }
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd (head, n) {
    let index = 1,
        length = 1,
        position = head;

    while (true) {
        if (position.next) {
            length++;
            position = position.next;
        } else {
            break;
        }
    }

    position = head;

    while (true) {
        if (length === n) {
            position = head.next;
            head.next = null;
            return position;
        } else {
            if (index === length - n) {
                position.next = position.next.next ? position.next.next : null;
                return head;
            } else {
                position = position.next;
                index++;
            }
        }
    }
}

const node1 = new ListNode(1),
      node2 = new ListNode(2),
      node3 = new ListNode(3),
      node4 = new ListNode(4),
      node5 = new ListNode(5);

node1.linkNext(node2).linkNext(node3).linkNext(node4).linkNext(node5);
console.log(removeNthFromEnd (node1, 2));