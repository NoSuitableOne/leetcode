#include <iostream>

using namespace std;

struct ListNode{
    int val;
    ListNode* next;
    ListNode(int x):val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        int loc = count(head)-n;
        int curr = 1;
        ListNode *left = head;
        while(curr < loc){
            left = left->next;
            curr += 1;
        }
        ListNode *right = left->next;
        right = right->next;
        left->next = right;

        return head;

    }

    int count(ListNode* head){
        int l(0);
        while(head != NULL){
            l += 1;
            head = head->next;
        }
        return l;
    }
};

void push(ListNode *node, int val){
    ListNode *p = new ListNode(val);
    while(node->next != NULL){
        node = node->next;
    }
    node->next = p;
}

int main(){
    Solution s;
    ListNode *l1 = new ListNode(1);
    push(l1, 2);
    push(l1, 3);
    push(l1, 4);
    push(l1, 5);
    push(l1, 6);

    int n = 4;
    ListNode *head = s.removeNthFromEnd(l1, n);
    while(head != NULL){
        cout << head->val << " ";
        head = head->next;
    }
    cout << endl;

    return 0;
}