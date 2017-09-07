#include <iostream>
#include <string>
#include <math.h>

using namespace std;

class Solution {
public:
    string convert(string s, int numRows) {
        int meta = 2*numRows-2;
        int nums = s.size()/meta + 1;
        string result;
        for (int i = 0; i < numRows; ++i){
            for (int j = 0; j < nums; ++j){
                int index1 = i + j*meta;
                int index2 = index1 + 2*(numRows-i-1);
                if (index1 < s.size()) {result.append(s, index1, 1);}
                if (index2 % meta != 0 and (index2-numRows+1) % meta !=0 and index2 < s.size()) {
                    cout << index2 % meta << endl;
                    result.append(s, index2, 1);
                }
            }
        }
        return result;
    }
};

int main(){
    Solution s;
    string str("OGSKWHNMYF");
    int numRows(4);

    string result = s.convert(str, numRows);
    cout << result << endl;

    return 0;
}
