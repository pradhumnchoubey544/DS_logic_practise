// # Swap x and y using destructuring assignment
let x = 10;
let y = 20;
[x, y] = [y, x];// we swap in one line wethout use of third veriables
console.log(x); // Op: 20
console.log(y); // Op: 10 



// # How do you combine two or more arrays?
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2]; // by using of spread operater we can combine as many array we can.
console.log(combinedArray); // Op: [1, 2, 3, 4, 5, 6]



//# How to create a specific number of copies for a string?
const str = "abc";
const numCopies = 3;
const repeatedString = str.repeat(numCopies);
console.log(repeatedString); // Op: "abcabcabc"



// #What is the easiest way to convert an array to an object?
const arr = [["name", "Alice"], ["age", 30]];
const obj = Object.fromEntries(arr);
console.log(obj); // Output: { name: "Alice", age: 30 }


// #Verify that a function argument is a Number or not?
function isNumber(arg) {
    return typeof arg === 'number';
  }
  const num1 = 10;
  const strNum = "20";

  console.log(isNumber(num1)); // Op: true
  console.log(isNumber(strNum)); // Op: false
  


// #What is the easiest way to resize an Array?
//incresing size
const myArray = [1, 2, 3];
myArray.length = 5; // Increase size to 5
console.log(myArray); // Output: [1, 2, 3, undefined, undefined]
//decrease size
const myArray2 = [1, 2, 3, 4, 5];
myArray2.length = 3; // Decrease size to 3
console.log(myArray2); // Output: [1, 2, 3]


// #What's the difference between a function expression and function declaration?
function functionName(parameters) {  }        //Function Declaration:

const functionExpression= (parameters) => {  }    // Function Expression:

  


// #How to detect a mobile device with JavaScript?
// const uaParser = require('user-agents');
// function isMobile(userAgentString) {
//   const ua = uaParser(userAgentString);
//   return ua.isMobile;
// }
// const userAgent = 10 ;/* Get the User-Agent string from your environment */
// const isMobileDevice = isMobile(userAgent);




// #How to fill static values in an array?// nothing but inserting data in array 
//static values refer to data that remains constant throughout the program's execution
const staticArray = []; // empty array
for (let i = 0; i < 5; i++) {
  staticArray.push(i * 2); 
}
console.log(staticArray); // Op: [0, 2, 4, 6, 8]
// some another way is 
// 2) Using Array Literal:  const staticArray = [10, 20, 30, "apple", "banana"]; // diractly define in array declearation
// 3) Using fill() method (ES6 and above): myArray.fill("x", 2, 4); // it auto maticly fill frorm 2 to 4 inbetween all values


// #Why do we use The some() method in Arrays?// some will cheak each value if any vlaue satisfy it retur "true" else "false"
const numbers = [1, 3, 5, 7, 9];
const hasEvenNumber = numbers.some(number => number % 2 === 0);
console.log(hasEvenNumber); // Output: false (since none of the numbers are even)



// #How to add 15 minutes to a JavaScript Date?
const currentDate = new Date();
  console.log(currentDate); 
  function addMinutes(date, minutes) {
    const millisecondsToAdd = minutes * 60 * 1000;
    const newTime = date.getTime() + millisecondsToAdd;
    return new Date(newTime);
  }
  console.log(addMinutes(currentDate, 15));     
  


//# What is the difference between for..of and for..in?
// #### for...of work on vlaues for...in work on keys ### 
//* Use for...of for iterating over "elements in arrays {values}"
//for...of is specifically designed for iterating over iterable objects like arrays, strings, sets, maps, and custom iterables.
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log("for...of",fruit); // Op: apple, banana, orange
}

//* Use for...in cautiously for inspecting "object properties{key}", keeping in mind potential issues with inherited properties.
const person = { name: "Alice", age: 30, city: "New York" };
for (const key in person) {
  console.log("for...in",key, person[key]); // Op name Alice, age 30, city New York
}




// #How to set a property in localStorage?
const user = {
  firstName: "Jane",
  lastName: "Doe"
};
const userString = JSON.stringify(user);  //Converts a JavaScript object to a JSON string and stores it in a variable.
//localStorage.setItem('userData', userString);  // hear local storage is not define so it will give error  




// #Give a list of the various ways using which an HTML element can be accessed within a JavaScript code?
//1) const element = document.getElementById("myElement");
//2) const elements = document.querySelectorAll("h2"); 





// #State the difference between Apply and Call?
// use call when you have a few arguments and want to list them explicitly.
// use apply when you have a pre-existing array of arguments or want to construct them dynamically.





//# What is the difference between undefined and not defined in JavaScript?
//undefined is a valid value assigned to a declared variable that lacks a specific value.
//Not defined indicates a variable that hasn't been declared in the current scope and cannot be accessed.





// #Explain Closure in JavaScript with an example?
//Closures provide a way to create private variables within a function, as the inner function can access the outer function's variables but not modify them from outside.
//Closures are commonly used in various scenarios like creating private state for objects, implementing modules, and simulating event listeners.






// #Explain JavaScript promise.all with an example?
// function fetchData1() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve("Data from source 1"), 1000); 
//   }
  
//   function fetchData2() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve("Data from source 2"), 500); 
//     });
//   }
  
//   function fetchData3() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => reject(new Error("Error fetching data from source 3")), 800); 
//     });
//   }
  
//   Promise.all([fetchData1(), fetchData2(), fetchData3()])
//     .then(results => {
//       console.log("All data fetched successfully:", results); // This won't be executed due to the rejection
//     })
//     .catch(error => {
//       console.error("Error fetching data:", error.message); // Error message from fetchData3 will be logged
//     });
  



// # diff in promis.all() and promis.race() and  promis.any() and promis.allselect()
//Use Promise.all() when you need to wait for all asynchronous operations to complete before proceeding.
//Use Promise.race() when you only care about the result of the first successful or failing Promise.
// painding





// #Give an example of an Anonymous function? 
// const button = document.getElementById("myButton");
// button.addEventListener("click", function() {
//   console.log("This button was clicked!");
// });           // hear function() { console.log("This button was clicked!");  is an Anonymous function.




// #What is Prototype Property? Explain with an Example?
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name + "!");
  };
  const person1 = new Person("Alice", 30);
  const person2 = new Person("Bob", 25);
  console.log("person1",person1.greet()); 
  console.log("person2",person2.greet()); 



//Explain function hoisting with an example?
// hoisting happend with function only not with variable including var also been hoisted but not in clear form
//Ex2
console.log(greet("Alice")); 
function greet(name) {
  console.log("Hello, " + name + "!");
}




// #How to implement Bubble sort in JavaScript?
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
const numbers1 = [5, 1, 4, 2, 8];
const sortedNumbers = bubbleSort(numbers1);
console.log(sortedNumbers); // Op: [1, 2, 4, 5, 8]





  

