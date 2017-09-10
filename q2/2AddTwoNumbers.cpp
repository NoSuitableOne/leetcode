/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
#include <iostream>

using namespace std;

struct ListNode{ //define a struct named ListNode
    int val; //member variables
    ListNode *next; //member variables, a pointer point to the anthor struct object
    ListNode(int x) : val(x), next(NULL) {} //constructor, : initialization list, member val initialize as x, member next initalization as NULL;
};

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *head1 = l1;
        ListNode *head2 = l2;
        ListNode *output = new ListNode(0);

        int sum = head1->val + head2->val;
        int result = sum%10;
        int carry = sum/10;
        output->val = result;

        while (head1->next or head2->next){
            if(head1->next == NULL){
                head1->next = new ListNode(0);
            }
            if(head2->next == NULL){
                head2->next = new ListNode(0);
            }

            head1 = head1->next;
            head2 = head2->next;

            sum = head1->val + head2->val + carry;
            result = sum%10;
            carry = sum/10;

            ListNode *head = output;
            while(head->next)
            {
                head = head->next;
            }
            head->next = new ListNode(result);
        }

        if (carry)
        {
            ListNode *head = output;
            while(head->next)
            {
                head = head->next;
            }
            head->next = new ListNode(carry);
        }
    return output;
    }
};

void push(ListNode *l, int value){
    ListNode *newNode = new ListNode(0);
    newNode->val = value;

    ListNode *head = l;

    while(head->next)
    {
        head = head->next;
    }
    head->next = newNode;
}

int main(){
    ListNode l1(3);
    ListNode l2(9);

    push(&l1, 2);
    push(&l2, 8);

    push(&l1, 9);
    //push(&l2, 3);

    Solution s;
    ListNode *output = new ListNode(0);
    output = s.addTwoNumbers(&l1, &l2);

    ListNode *head = new ListNode(0);
    head = output;
    cout << head->val << " ";
    while(head->next)
    {
        head = head->next;
        cout << head->val << " ";
    }

    cout << endl;
    /**/

    return 0;
}
