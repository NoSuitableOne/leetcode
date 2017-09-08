#pragma GCC diagnostic error "-std=c++11"
#include <iostream>
#include <string>
#include <vector>
#include <map>

using namespace std;

class Solution{
public:
    vector<string> letterCombinations(string digits){
        map<char, vector<string> > digitToLetter;
        string letter[] = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"};
        vector<string> v2(letter, letter+3);
        digitToLetter['2'] = v2;
        vector<string> v3(letter+3, letter+6);
        digitToLetter['3'] = v3;
        vector<string> v4(letter+6, letter+9);
        digitToLetter['4'] = v4;
        vector<string> v5(letter+9, letter+12);
        digitToLetter['5'] = v5;
        vector<string> v6(letter+12, letter+15);
        digitToLetter['6'] = v6;
        vector<string> v7(letter+15, letter+19);
        digitToLetter['7'] = v7;
        vector<string> v8(letter+19, letter+22);
        digitToLetter['8'] = v8;
        vector<string> v9(letter+22, letter+26);
        digitToLetter['9'] = v9;

        vector<string> result;
        for(int i = 0; i < digits.size(); ++i){
            result = combinations(result,digitToLetter[digits[i]]);
        }

        return result;
    }

    vector<string> combinations(vector<string>& result, vector<string>& val){
        if(result.empty()) {result = val; return result;}
        else{
            vector<string> tmp;
            for(int i = 0; i < result.size(); ++i){
                for(int j = 0; j < val.size(); ++j){
                    tmp.push_back(result[i] + val[j]);
                }
            }
            result = tmp;
            return result;
        }
    }
};

int main(){
    Solution s;
    string digits("45");

    vector<string> result = s.letterCombinations(digits);
    for(int i = 0; i < result.size(); ++i){
        cout << result[i] << " ";
    }
    cout << endl;

    return 0;
}