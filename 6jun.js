// # Write a function that returns the number of vowels in a string.
// let str = "pradhumn choubey".split('');
// let count = 0;
// str.forEach((ele)=>{
//   if(ele == 'a'|| ele == 'e' ||ele == 'i'||ele == 'o'||ele == 'u' )
//     {
//         count++;
//     }
//  })
//  console.log(count);




// # Write a function to find the largest number in an array.
// let arr = [1,2,3,4,5,10,4,5,6,11];
// let largest = 0;
// arr.forEach((ele)=>{
//     if(ele > largest)
//     {
//         largest = ele ;
//     }
// })
// console.log(largest);




//# Write a function to check if a given number is prime or not?
// let num = 10;
// let findprime = function (num)
// {
//     if(num <= 1) return false;
//     if(num ==2 || num == 3) return true;
//     if(!(num % 2 == 0 || num % 3 == 0)) return true;
//     else return false;
// }
// console.log(findprime(num));
// console.log(findprime(num)?"is not prime number":"is prime number");
 


//# Write a function to calculate the factorial of a number.
//  let num = 5;
//  let sumnum = 1;
//  for(let i = 1;i<= num;i++)
// {
//  sumnum =  sumnum * i;
// }
// console.log(num,"factorial is = ",sumnum)



//# Write a function to calculate the Fibonacci series.
// let factorial=[];
// let a = 0;
// let b = 1;
// for(let i = 0;i<10;i++)
// {
//     factorial[i] = a + b;
//     a = b;
//     b = factorial[i];
// }
// console.log(factorial);



// # Write a program to remove all whitespace characters from a string.
// let string = "hello i am pradhumn";
// console.log(string.split(" ").join(""));