// #include <iostream>

// using namespace std;

// struct ListNode{
// 	int val;
// 	ListNode *next;
// 	ListNode(int x):val(x), next(NULL) {}
// };

// class Solution{
// public:
//     ListNode* mergeTwoLists(ListNode* l1, ListNode* l2){
// 		ListNode* result = NULL;
//         ListNode* head = NULL;

// 		while(l1 or l2){
//             // cout << ":: " << l1->val << " " << l2->val << endl;
//             if(l1 == NULL){head->next = l2; head = l2; l2 = l2->next;}
//             else
//                 if(l2 == NULL){head->next = l1; head = l1; l1 = l1->next;}

// 			else
//                 if(l1->val < l2->val) {
//                     if(result==NULL) {result = l1; head = l1;}
//                     else {
//                         head->next = l1;
//                         head = l1;
//                     }
//                     if(l1!=NULL) {l1 = l1->next;}
//                 }
//                 else {
//                     if(result==NULL) {result = l2; head = l2;}
//                     else {
//                         head->next = l2;
//                         head = l2;
//                     }
//                     if(l2!=NULL) {l2 = l2->next;}
//                 }
//     		}
//         return result;
//     }

// };

// void push(ListNode* node, int val){
// 	ListNode* p = new ListNode(val);
// 	while(node->next!= NULL){
// 		node = node->next;
// 	}
// 	node->next = p;
// }

// int main(){
// 	Solution s;
// 	ListNode* l1 = new ListNode(1);
// 	push(l1, 7);
// 	push(l1, 8);

// 	ListNode* l2 = new ListNode(3);
// 	push(l2, 5);
// 	push(l2, 10);

// 	ListNode* result = s.mergeTwoLists(l1, l2);
// 	while(result!=NULL){
// 		cout << result->val << " ";
//         result = result->next;
// 	}
// 	cout << endl;

// 	return 0;
// }

#include <iostream>

using namespace std;

struct ListNode
{
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution{
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2){
        ListNode* result = new ListNode(-1);
        ListNode* p = result;
        while(l1 && l2){
            // cout << l1->val << " " << l2->val << endl;
            if(l1->val < l2->val){
                p->next = l1;
                l1 = l1->next;
            }
            else{
                p->next = l2;
                l2 = l2->next;
            }
            p = p->next;
        }
        if (l1 == NULL){
            p->next = l2;
        }
        if (l2 == NULL){
            p->next = l1;
        }
        return result->next;
    }
};

void push(ListNode* node, int val){
    ListNode* p = new ListNode(val);
    while(node->next != NULL){
        node = node->next;
    }
    node->next = p;
}

int main(){
    Solution s;
    ListNode* l1 = new ListNode(1);
    push(l1, 4);
    push(l1, 8);

    ListNode* l2 = new ListNode(2);
    push(l2, 3);
    push(l2, 9);

    ListNode* result = s.mergeTwoLists(l1, l2);
    while(result != NULL){
        cout << result->val << " ";
        result = result->next;
    }
    cout << endl;

    return 0;
}