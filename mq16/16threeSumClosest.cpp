#include <iostream>
#include <vector>
#include <limits.h>
#include <stdlib.h>

using namespace std;

class Solution{
public:
    int threeSumClosest(vector<int>& nums, int target){
        int result = 0;
        int delta = INT_MAX;

        for(int i = 0; i < nums.size(); ++i ){
            for(int j = i+1; j < nums.size(); ++j){
                for(int k = j+1; k < nums.size(); ++k){
                    int sum = nums[i] + nums[j] + nums[k];
                    if(abs(sum-target)<delta){
                        delta = abs(sum-target);
                        result = sum;
                    }
                }
            }
        }

        return result;
    }
};

int main(){
    Solution s;

    int target = 3;
    int arr[] = {-1,2,0,-4,3};
    int cnt = sizeof(arr)/sizeof(int);
    vector<int> nums(arr, arr+cnt);

    int result = s.threeSumClosest(nums, target);
    cout << result << endl;

    return 0;
}