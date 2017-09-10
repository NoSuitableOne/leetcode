#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        //1. get the string"s length
        int length = s.length();
        int result = 1;

        for(int i = 0; i < length; i++){
            int temp = 1;
            if (result < length - i - 1){  //when it is need to find the substring, it should be remove
                for(int j = i+1; j < length; j++){
                    string s2 = s.substr(i, temp);
                    cout << "i, j: " << i << " " << temp << endl;
                    cout << s2 << " " << s[j] << endl;
                    string::size_type idx = s2.find(s[j]);
                    if(idx == string::npos) {temp += 1;}
                    else { break;}
                    cout << temp << endl;
                if (temp > result) {result = temp;}
                }
            }
        }

        return result;
    }
};

int main(){
    string str("bbbbb");
    int length;

    Solution s;
    length = s.lengthOfLongestSubstring(str);
    cout << length << endl;

    return 0;
}