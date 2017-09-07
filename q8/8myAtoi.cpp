#include <iostream>
#include <string>
#include <sstream>

using namespace std;

class Solution{
public:
    int myAtoi(string str){
        //remove the space
        string sbstr = rmSpace(str);
        cout << sbstr << endl;
        cout << sbstr.empty() << endl;

        if(sbstr.empty()) { cout<<"a"<<endl; cout << "No conversion performed!" << endl; return 0;}
        if(sbstr[0] != "-" and sbstr[0] != "+" and not(isdigit(sbstr[0]))) { cout<<"b"<<endl; cout << "No conversion performed!" << endl; return 0;}

        int length = 0;
        if (sbstr[0] == "-") {
            int length = getLength(sbstr.substr(1));

            //include the situtation of overflow
            if(length > 0) {  cout<<"c"<<endl; int result = strToInt(sbstr.substr(1)); return -result;}
            else { cout<<"d"<<endl; cout << "No conversion performed!" << endl; return 0;}
        }

        if (sbstr[0] == "+") {
            int length = getLength(sbstr.substr(1));

            //include the situtation of overflow
            if(length > 0) {  cout<<"e"<<endl; int result = strToInt(sbstr.substr(1)); return result;}
            else { cout<<"f"<<endl; cout << "No conversion performed!" << endl; return 0;}
        }

        if (isdigit(sbstr[0])) {
            cout<<"g"<<endl;
            int length = getLength(sbstr);

            //include the situtation of overflow
            int result = strToInt(sbstr);
            return result;
        }
    }

    string rmSpace(string str){
        int start(-1);
        for(int i = 0; i < str.size(); ++i){
            if(isspace(str[i])) {continue;}
            else {start = i; break;}
        }

        string substr;
        if(start>-1) substr = str.substr(start);

        return substr;
    }

    int getLength(string str){
        int length(0);
        for(int i = 0; i < str.size(); ++i){
            if(isdigit(str[i])) {length += 1;}
            else {break;}
        }
        return length;
    }

    int strToInt(string str){
        stringstream ss;
        ss<<str;
        int result;
        ss>>result;
        return result;
    }
};

int main() {
    Solution s;
    string str("  +d445ffd ");

    int result = s.myAtoi(str);
    cout << result << endl;

    return 0;
}
