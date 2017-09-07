#include <iostream>
#include <vector>
#include <math.h>

using namespace std;

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int length1 = nums1.size();
        int length2 = nums2.size();
        int odd = (length1+length2)%2;
        int index = ceil((length1 + length2 + 1)/2.);
        cout << index << endl;

        int pre = 0;

        int curr1 = 0;
        int count = 0;
        int curr2 = 0;
        for (; curr1 < length1; curr1++){
            int j = curr2;
            if(j != length2){
                for (j; j < length2; j++){
                    count += 1;
                    if (nums1[curr1] < nums2[j]){
                        if (count >= index) {
                            if(odd) {return nums1[curr1];}
                            else {return (pre+nums1[curr1])/2.;}
                        }
                        pre = nums1[curr1];
                        break;
                    }
                    else{
                        curr2 += 1;
                        if(count >= index) {
                            if (odd) {return nums2[j];}
                            else {return (pre+nums2[j])/2.;}
                        }
                        pre = nums2[j];
                    }
                }
            }
            else{return (nums1[index-length2-1] + pre)/2.;}
        }
        if (count < index) {
            if (odd) {return nums2[index-length1-1];}
            else {return (nums2[index-length1-1]+nums2[index-length1-2])/2.;}
        }
    }
};

int main(){
    Solution s;
    vector<int>::iterator int_iter;
    int iarr1[] = {1,2,5};
    int iarr2[] = {3,4,6};

    int count1 = sizeof(iarr1)/sizeof(int);
    int count2 = sizeof(iarr2)/sizeof(int);

    vector<int> nums1(iarr1, iarr1+count1);
    vector<int> nums2(iarr2, iarr2+count2);

    double median = s.findMedianSortedArrays(nums1, nums2);
    cout << median << endl;

    return 0;
}