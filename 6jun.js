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



//# by js method find dublicate and unique values from array
// let arr = [1,2,3,4,1,2,3,4,6];
// let unique = arr.filter((ele, index, self) => self.indexOf(ele) === index && self.lastIndexOf(ele) === index); 
// // lastIndexOf(ele) returns the last index at which a given element can be found so hear {indexOf === lastIndexOf}
// let dublicate = arr.filter((ele,index,Yarr)=>{ return (Yarr.indexOf(ele) !== index)}) ;
// let commonValues = arr.filter((ele,index,Yarr)=>{ return (Yarr.indexOf(ele) == index)}) ;
// console.log("commonValues" ,commonValues);
// console.log("dublicate",dublicate);
// console.log("unique",unique);




// # given value is integer or not 
// let value = "11";
// console.log(isNaN(value)); // isNaN() will return bullion vlaue based of it is int or not a int
// console.log(!isNaN(value));// opposit if it 




//# { const vs object.freeze()} 
// const will make immutable to variable like in this code {const k = 10} so it will not change 
// but Object.freeze(person); thie value will immutable which is name:"hello world" but we can change but we can assine that object to other variabel.
// let person ={
//              name:"hello world"
//             }
// Object.freeze(person);method in JavaScript is used to make an object immutable. 
// person.name= "pradhumn";
// console.log(person);   //OP:-  "hello world" 



//# how can we sort given array of string 
// let arr = ["jan","feb","mar","ape","may","jun"];
// console.log(arr.sort());


// # how to find average value of given array
// arr = [1,3,5,2,5,6,8,4];
// let totelsun = arr.reduce((acu,ele)=>{return acu+ele },0)
// let average = totelsun / arr.length;
// console.log(average); // 4.25 is average value of this array


