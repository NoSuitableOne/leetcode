#include <iostream>
#include <vector>

using namespace std;

class Solution{
public:
    vector<vector<int> > threeSum(vector<int>& nums){
        vector<vector<int> > result;

        for(int i = 0; i < nums.size(); ++i ){
            for(int j = i+1; j < nums.size(); ++j){
                for(int k = j+1; k < nums.size(); ++k){
                    if(nums[i] + nums[j] + nums[k] == 0){
                        int values[3] = {nums[i], nums[j], nums[k]};
                        vector<int> tmp(values, values+3);
                        result.push_back(tmp);
                        break;
                    }
                }
            }
        }

        return result;
    }
};

int main(){
    Solution s;
    int arr[] = {2,4,-1,-2,3,0,1,1};
    int cnt = sizeof(arr)/sizeof(int);
    vector<int> nums(arr, arr+cnt);

    vector<vector<int> > result = s.threeSum(nums);

    for(int i = 0; i < result.size(); ++i){
        for(int j = 0; j < result[i].size(); ++j){
            cout << result[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}