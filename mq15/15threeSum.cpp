#include <iostream>
#include <vector>

using namespace std;

class Solution{
public:
    vector<vector<int> > threeSum(vector<int>& nums){
        vector<vector<int> > result;

    }
};

int main(){
    Solution s;
    int arr[] = {2,4,-1,-2,3,0,1};
    int cnt = sizeof(arr)/sizeof(int);
    vector<int> nums(arr, arr+cnt);

    vector<vector<int> > result = s.threeSum(nums);

    return 0;
}