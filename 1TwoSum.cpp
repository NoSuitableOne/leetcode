#include<iostream>
#include<vector>

using namespace std;

class Solution{
public:
    vector<int> twoSum(vector<int>& nums, int target){
        vector<int> index(2, 0);
        int count = nums.size();
        for (int i = 0; i < count; i++){
            int addendOne = nums[i];
            for (int j = i; j < count; j++)
            {
                int addendTwo = nums[j];
                int sum = addendOne + addendTwo;
                if (sum == target){
                    index[0] = i;
                    index[1] = j;
                    return index;
                }
            }
        }
    }
};

int main()
{
    Solution s;
    int a[] = {2,7,10,11};
    vector<int> veca(a, a+4);
    int target = 17;

    vector<int> index = s.twoSum(veca, target);

    vector<int>::iterator t;
    for(t=index.begin(); t!=index.end(); t++){
        cout << "index: " << *t << endl;
    }

    return 0;
}
