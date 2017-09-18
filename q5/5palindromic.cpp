#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    string longestPalindrome(string s) {
        int start = 0;
        int length = s.size();
        int logest = 0;

        for(int i = 0; i < length; ++i){
            for(int j = i+1; j < length; j++){
                if (s[i] == s[j]) {
                    int l = (j-i+1)/2-1;
                    cout << "i: " << i << " " << "j: " << j << " " << "l: " << l << endl;
                    int k = 0;
                    for (k; k < l; k++){
                        if (s[i+k+1] != s[j-k-1]) { cout << "hh" << endl; break;}
                    }
                    cout << "k: " << k << " " << "l: " << l << endl;
                    if (k == l) {
                        int len = j-i+1;
                        cout << "len: " << len << endl;
                        if (len > logest) { start = i; logest = len;}
                    }
                }
            }
        }
        string substr = s.substr(start, logest);
        return substr;
    }
};

int main(){
    Solution s;
    string str("cbbd");
    // s.longestPalindrome(str);
    string substr = s.longestPalindrome(str);
    cout << substr << endl;

    return 0;
}
