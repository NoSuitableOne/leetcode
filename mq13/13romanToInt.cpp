#include <iostream>
#include <string>
#include <map>

using namespace std;

class Solution{
public:
    int romanToInt(string str){
        // map: roman--int
        map<string, int> romanInt;
        romanInt["M"] = 1000;
        romanInt["CM"] = 900;
        romanInt["D"] = 500;
        romanInt["CD"] = 400;
        romanInt["C"] = 100;
        romanInt["XC"] = 90;
        romanInt["L"] = 50;
        romanInt["XL"] = 40;
        romanInt["X"] = 10;
        romanInt["IX"] = 9;
        romanInt["V"] = 5;
        romanInt["IV"] = 4;
        romanInt["I"] = 1;

        int result(0);

        int i = 0;
        while(i < str.size()) {
            string s1 = str.substr(i,1);
            string s2 = str.substr(i+1,1);
            if(romanInt[s1] < romanInt[s2]) {result += romanInt[s1+s2]; i=i+2; }
            else { result += romanInt[s1]; i=i+1;}
        }

        return result;
    }
};

int main(){
    Solution s;
    string str("MLIV");
    int result = s.romanToInt(str);
    cout << result << endl;

    return 0;
}
