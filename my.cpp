#include <iostream>
using namespace std;

int main(){
	/*
	Margin All
	*/
	for(int i = 1; i <= 100; i++){
		cout << ".mr-" << i << "-a {\n\t margin: " << i << "px;\n}" << endl;
	}
	cout << "/* Margin Left */" << endl;
	for(int j = 1; j <= 100; j++){
		cout << ".mr-" << j << "-l {\n\t margin-left: " << j << "px;\n}" << endl;
	}
	cout << "/* Margin Right */" << endl;
	for(int k = 1; k <= 100; k++){
		cout << ".mr-" << k << "-r {\n\t margin-right: " << k << "px;\n}" << endl;
	}
	cout << "/* Margin Bottom */" << endl;
	for(int l = 1; l <= 100; l++){
		cout << ".mr-" << l << "-b {\n\t margin-bottom: " << l << "px;\n}" << endl;
	}
	cout << "/* Margin Top */" << endl;
	for(int m = 1; m <= 100; m++){
		cout << ".mr-" << m << "-t {\n\t margin-top: " << m << "px;\n}" << endl;
	}
	cout << "/* Margin Top Bottom */" << endl;
	for(int n = 1; n <= 100; n++){
		cout << ".mr-" << n << "-tb {\n\t margin: " << n << "px 0px;\n}" << endl;
	}
	cout << "/* Margin Left Right */" << endl;
	for(int o = 1; o <= 100; o++){
		cout << ".mr-" << o << "-lr {\n\t margin: " << "0px " << o << "px;\n}" << endl;
	}
	return 0;
}