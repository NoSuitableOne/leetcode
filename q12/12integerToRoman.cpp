#include <iostream>
#include <string>

using namespace std;

class Solution{
public:
    string intToRoman(int num){
        string result;

        int arr1[] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        string arr2[] = {"M", "CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};

        int i = 0;
        while(num){
            while(num >= arr1[i]){
                result += arr2[i];
                num = num - arr1[i];
            }
            ++i;
        }
        return result;
    }
};


int main(){
    Solution s;
    int num(3999);
    string result = s.intToRoman(num);
    cout << result << endl;

    return 0;
}