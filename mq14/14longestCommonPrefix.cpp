#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string  result;

        int l = strs[0].size();
        for(int i=0; i<strs.size(); ++i){
            if(strs[i].size() < l) {l=strs[i].size();}
        }

        for(int i = 0; i < l; ++i){
            char curr = strs[0][i];
            bool state = true;
            for(int j = 0; j < strs.size(); ++j){
                if(strs[j][i] == curr) continue;
                else {state = false; break;}
            }
            if(state) result += strs[0][i];
        }

        return result;
    }
};

int main(){
    Solution s;

    string arr[] = {"leet", "leet", "leetr", "leetcode", "leetc"};
    int l = sizeof(arr)/sizeof(string);
    vector<string> strs(arr, arr+l);

    string result = s.longestCommonPrefix(strs);
    cout << result << endl;

    return 0;
}