#pragma GCC diagnostic error "-std=c++11"
#include <iostream>
#include <stdlib.h>
#include <sstream>
#include <limits.h>

using namespace std;

class Solution{
public:
    int reverse(int x) {
        string str = toString(abs(x));
        string rstr(str.rbegin(), str.rend()); //reverse
        long result = (x/abs(x)) * toLong(rstr);
        if (result > INT_MAX or result < INT_MIN) {result=0;}

        return result;
    }

    string toString(int x){
        stringstream ss;
        ss<<x;
        string str = ss.str();

        return str;
    }

    long toLong(string s){
        stringstream ss;
        ss<<s;
        long x;
        ss>>x;

        return x;
    }
};

int main(){
    Solution s;
    int x(-1002233398);

    int result = s.reverse(x);
    cout << result << endl;

    return 0;
}