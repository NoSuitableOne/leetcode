#include <iostream>
#include <vector>
#include <algorithm>
#include <set>

using namespace std;

class Solution{
public:
    vector<vector<int> > fourSum(vector<int>& nums, int target){
        set<vector<int> > result;
        //sort
        sort(nums.begin(), nums.end());
        int l = nums.size();
        for(int i = 0; i < l-3 && nums[i]<=0; ++i){
            for(int j = i+1; j < l-2; ++j){
                vector<int> value;
                int left = j+1;
                int right = l-1;
                while(left < right){
                    int sum = nums[i]+nums[j]+nums[left]+nums[right];
                    if(sum == target) {
                        value.push_back(nums[i]);
                        value.push_back(nums[j]);
                        value.push_back(nums[left]);
                        value.push_back(nums[right]);
                        result.insert(value);
                        ++left;--right;
                    }
                    else if(sum < 0) {++left;}
                    else {--right;}
                }
            }
        }

        return vector<vector<int> > (result.begin(), result.end());
    }
};

int main(){
    Solution s;
    int arr[] = {1,0,-1,0,-2,2};
    int l = sizeof(arr)/sizeof(int);
    vector<int> nums(arr, arr+l);

    int target = 0;

    vector<vector<int> > result = s.fourSum(nums, target);
    for(int i = 0; i < result.size(); ++i){
        for(int j = 0; j < result[i].size(); ++j){
            cout << result[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}