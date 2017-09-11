/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
/*
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

    return 0;
}
*/

//==============================================================================
#include <iostream>

using namespace std;

struct ListNode
{
    int val;
    ListNode *next;
    ListNode(int x):val(x),next(NULL) {}
};

class Solution{
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2){
        int sum = 0;
        ListNode *output = NULL;
        ListNode *tail = NULL;
        while(l1 != NULL || l2 != NULL){
            if(l1 != NULL){
                sum = sum + l1->val;
                l1 = l1->next;
            }
            if(l2 != NULL){
                sum = sum + l2->val;
                l2 = l2->next;
            }
            ListNode *p = new ListNode(sum%10);
            if(output == NULL){
                output = p;
                tail = p;
            }
            else{
                tail->next = p;
                tail = p;
            }

            sum = sum / 10; //carry
        }
        if(sum != 0){
            ListNode *p = new ListNode(sum);
            tail->next = p;
        }
        return output;
    }
};

void push(ListNode* node, int value){
    ListNode *p = new ListNode(value);
    ListNode *head = node;
    while(head->next != NULL){
        head = head->next;
    }
    head->next = p;
}

int main(){
    Solution s;
    ListNode *l1 = new ListNode(3);
    push(l1,2);
    push(l1,9);

    ListNode *l2 = new ListNode(3);
    push(l2,3);
    push(l2,2);

    ListNode *output = s.addTwoNumbers(l1, l2);
    while(output != NULL){
        cout << output->val << " ";
        output = output->next;
    }
    cout << endl;

    return 0;
}



