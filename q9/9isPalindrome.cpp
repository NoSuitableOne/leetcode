#include <iostream>

using namespace std;

class Solution{
public:
    bool isPalindrome(int x){
        if (x < 0 or (x!=0 and x%10 == 0)) {return false;}

    int rev(0);
    while(x>rev){
        rev = rev*10 + x%10;
        x = x/10;
    }

    return x == rev or x == rev/10;
    }
};

int main(){
    Solution s;
    int x = -33233;
    bool result = s.isPalindrome(x);
    cout << result << endl;

    return 0;
}