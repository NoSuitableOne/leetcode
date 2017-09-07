#include <iostream>
#include <vector>

using namespace std;

class Solution{
public:
    int maxArea(vector<int>& height){
        int area = 0;
        for(int i = 0; i < height.size(); i++){
            for(int j = i+1; j < height.size(); ++j){
                int h = height[i]>height[j] ? height[j] : height[i];
                area = area > h*(j-i) ? area : h*(j-i);
            }
        }
        return area;
    }
};

int main(){
    Solution s;

    int arr[] = {3,4,56,21,4,13,4};
    size_t cnt = sizeof(arr)/sizeof(int);
    vector<int> height(arr, arr+cnt);

    int result = s.maxArea(height);
    cout << result << endl;

    return 0;
}