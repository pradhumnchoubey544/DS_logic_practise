// #How do you write a function which can take (x) number of parameters?
//when ever you are not sure how many peramater will come to your function use spreat operater

// function f1(...args)
// {
//     console.log(...args);
//     console.log(args[0]); // you will get first vlaue 
//     console.log(args[5]); // you will get fifth vlaue 

// }
// f1(1,2,3,4,5,6);



//# Convert the given number into the exact decimal points to the right side?
// let num = 12345.6789;
// console.log(num.toFixed(2)); // by using of "tofixed(num)" we can shift desimal points based on over need



//# How do you return a character from a string at a specific index(2)?
// let myString = "Hello, world!";
// let secondCharacter = myString.charAt(1);
// console.log(secondCharacter); // op  "e"



// #How do you write an add() function using javascript currying concept?
// curring concept :-curring is concept of evaluating a function with multiple arguments into a sequence of function with single / multiple arguments
// function add(x)
// {
//     let sum = x;
//     function resultFn(y)
//     {
//         sum+=y;
//         return sum;
//     }
//     resultFn.valueOf = function(){
//         return sum;
//     }
//     return resultFn;
// }
// console.log(add(2)(3)(4).valueOf());




//# How do you replace a given string in the string of arrays?
// hear we are replace each array string by particuler word 
// let arr = ['rohon','mohon','sohon','gohon'];
// arr = arr.map((ele)=>{
//                       return ele.replace(/hon/g,"ABC");
//                      });
// console.log(arr);


// #How do you create an Array out of a given sentence?
// let string = "hi my name is pradhumn";
// let stringArr = string.split(" ");
// console.log(stringArr);



//50.How can we call a function which logs a message after every 5 seconds?
// function logs(){ 
//     setTimeout(()=>{console.log("lage of 5 seconds")},5000);
// }
// logs();


// 52 Write a function that performs binary search on a sorted array?
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             return mid; // Target found, return its index
//         } else if (arr[mid] < target) {
//             left = mid + 1; // Target is in the right half
//         } else {
//             right = mid - 1; // Target is in the left half
//         }
//     }
//     return -1; // Target not found
// }
// // Example usage:
// const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const target = 5;
// const result = binarySearch(sortedArray, target);
// console.log(result); // Output: 4 (index of target in the sortedArray)




//# How do you check whether a string contains a substring?
// let string = "my name is pradhumn";
// let sub_string = "name";
// let arrString = string.split(" ");
// console.log(arrString); 
// if(arrString.indexOf(sub_string) == 1)  // arrString.indexOf(sub_string) this will return (1 true,-1 false) 
//   console.log("sub_string is present");
// else console.log("sub_string is not present");



// # How do I get query string values in javascript?
// Example 1: Get query string values from the current page's URL
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const param1 = urlParams.get('param1');
// const param2 = urlParams.get('param2');
// console.log(param1); 
// console.log(param2); 




// #How to create and trigger events in javascript?
// const button = document.getElementById('myButton');
// button.addEventListener('click', function() {
//     console.log('Button was clicked!');
// });
// button.click();



//# How to display the current date in javascript?
// let date = new Date();
// console.log(date); // it is showing this un-strucuured day by using date-method we can get each one sepratly 2024-06-09T20:26:07.676Z 



// #How do you compare time for two dates?
// const startDate = new Date('2024-06-09T08:00:00');
// const endDate = new Date('2024-06-09T17:00:00');
// const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
// // Convert difference from milliseconds to hours, minutes, and seconds
// const differenceInSeconds = differenceInMilliseconds / 1000;
// const differenceInMinutes = differenceInSeconds / 60;
// const differenceInHours = differenceInMinutes / 60;
// console.log(`Difference in milliseconds: ${differenceInMilliseconds}`);
// console.log(`Difference in seconds: ${differenceInSeconds}`);
// console.log(`Difference in minutes: ${differenceInMinutes}`);
// console.log(`Difference in hours: ${differenceInHours}`);





