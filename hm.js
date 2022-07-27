n=input()
for i in range(n):
     i=i+1
     print(i)
0


def count (a,b);
if a<b;
count (a,b - 1)
print b
elif a<b;
print a
count (a - 1 , b)
a = input ()
b = input ()
count (a, b)



int main() 
{ 
    int number = 179; 
    int sum = 0; 
 
    while(number) 
    { 
        sum += number % 10; 
        number /= 10; 
    } 
    std::cout << "Sum is " << sum << std::endl;
}



#include <iostream>
#include <math.h>
#include <stdio.h>
using namespace std;
void rekurs(int k);
void main()
{
int k, max=0;
printf("Vvedite k \n");
scanf("%d", &k);
printf("%d \n",rekurs(k));
system("pause");
}
int rekurs(int k)
{
    if(k!=0)
    {
    return k%10,k/10;
    }
    else
    {
        return 0;
    }
}



include <iostream>
 
using namespace std;
 
 
int func(int num, int count)
{
    if (num/count)
        func(num, count*10);
    count/=10;
    cout<<num/count<<" ";
    num%=count;
    return 0;
}
 
void main()
{
    int num;
    cin>>num;
    func(num, 10);
    cout<<endl;
}


var a = ['a', 'b', 'c'];
var b = [1, 2, 3];

//Вариант 1:
var c = a.concat(b);
alert(c); //получится массив ['a', 'b', 'c', 1, 2, 3]

//Вариант 2:
var c = b.concat(a);
alert(c); //получится массив [1, 2, 3, 'a', 'b', 'c']


var a = ['a', 'b', 'c'];
var b = [1, 2, 3];

//Вариант 1:
var c = a.concat(b);
alert(c); //получится массив ['a', 'b', 'c', 1, 2, 3]

//Вариант 2:
var c = b.concat(a);
alert(c); //получится массив [1, 2, 3, 'a', 'b', 'c']


