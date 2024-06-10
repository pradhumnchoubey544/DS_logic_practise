// #How do you remove whitespaces from a given string?
// let str = "      my        name is rohon ";
// console.log(str.trim());




// #How do you check if a string starts with another string?
// const str = "Hello, world!";
// const prefix = "Hello";
// const result = str.startsWith(prefix);   // str.startsWith(prefix);
// console.log(result); 





// #How do you assign default values to variables?
// let value = undefined;
// let defaultValue = value ?? 1000;
// console.log(defaultValue); // if value is null,undefine,empty in that case 1000 will assine to the veriable
// or 
// let value = 0;
// let defaultValue = value ?? 1;   /// nullish coalescing operator (??),If value is null or undefined, then defaultValue will be assigned the string 'default'.
// console.log(defaultValue); // Output: value is empty so it will assine default value as '1';
// we can use || to handle default values
// let value = 0;
// let defaultValue = value || 'default';
// console.log(defaultValue); // Output: 'default'

// but diff in ?? and ||
// ?? will assine default  only for (null or undefined) but 
// Logical OR Operator || will assine default value for (false, 0, NaN, '', null, undefined) also .






//# For a given function, count the number of parameters expected by a function?
// function exampleFunction(a, b, c) {
//   
// }
// console.log(exampleFunction.length); // Output: 3






//# Implement a method which generates 5 random numbers?
// function generateRandomNumbers() {
//     let randomNumbers = [];
//     for (let i = 0; i < 5; i++) {
//         randomNumbers.push(Math.floor(Math.random() * 10));
//     }
//     return randomNumbers;
// }
// console.log(generateRandomNumbers());




//# Implement a method which generates random numbers between 41 and 67 and sort them reverse?
// function generateAndSortRandomNumbers(min, max, count) {
//     let randomNumbers = [];
//     for (let i = 0; i < count; i++) {
//         let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//         randomNumbers.push(randomNumber);
//     }
//     // Sort the array in reverse order
//     randomNumbers.sort((a, b) => b - a);
//     return randomNumbers;
// }
// // Example usage: generate 5 random numbers between 41 and 67 and sort them in reverse order
// console.log(generateAndSortRandomNumbers(41, 45, 5));






// # How do you search a string for a pattern?
// let str = "Hello world!";
// let pattern = "world";
// let result = str.includes(pattern); // include will find that word is present in string or not
// console.log(result); //OP: true





// How do you determine whether an object is frozen or not?
// let obj = {
//     prop: 'value'
// };
// Object.freeze(obj);  // freeze mean we can not change its value 
// let isFrozen = Object.isFrozen(obj); // by isFrozen we can cheak weather object is freeze or not
// console.log(isFrozen); // Output: true




// #How do you determine two values are the same or not using an object?
// "Object.is" provides a way to compare two values for strict equality, similar to the "===" operator,but with some differences that make it more suitable for certain use cases
// console.log(Object.is(25, 25));            // Output: true
// console.log(Object.is('foo', 'foo'));      // Output: true
// console.log(Object.is([], []));            // Output: false //different object references)
// console.log(Object.is({}, {}));            // Output: false //different object references)
// console.log(Object.is(NaN, NaN));          // Output: true
// console.log(Object.is(+0, -0));            // Output: false





//# How do you copy properties from one object to another object?
// let obj1 = {name:"rohon"}
// let obj2={};
// // obj2= obj1; console.log(obj2);
// //or by Object.assign method  
// Object.assign(obj2, obj1);
// console.log(obj2);




//#Diff in Unsealed Object & Frozen Object
// sealed Object: You cannot add new properties, You cannot delete existing properties. Existing properties can still be modified if they are writable.
// Unsealed Object: Can have properties added, modified, or deleted freely like a normal object is called unsealed object.
// Frozen Object: Cannot have properties added, modified, or deleted. It is immutable after freezing.
//#How do you determine if an object is sealed or not?
// let obj = {
//     prop: 'value'  
// };
// Object.seal(obj); 
// obj.newProperty = "rohon"; // we can not add new propertyes becouse it is "seal" 
// let isSealed = Object.isSealed(obj);// Check if the object is sealed
// console.log(isSealed); // Output: true
// console.log(obj); // { prop: 'value' }





//#Enumerable properties are those properties that are considered during enumeration, meaning they will be included when looping over object properties or when using methods like Object.keys(), Object.values(), Object.entries(), etc.
//# What is the main difference between Object.values and Object.entries method?
//Object.values() is handy when you only need to work with values of an object, for example, when you want to perform operations on values without caring about their keys.
//Object.entries() is useful when you need to work with both keys and values together, such as iterating over the object or converting it to another format.
// let obj = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3'
// };
// console.log(Object.values(obj)); // Op: ['value1', 'value2', 'value3']
// console.log(Object.entries(obj)); // Op: [['prop1', 'value1'], ['prop2', 'value2'], ['prop3', 'value3']]




//# How do you encode an URL?
// let originalUrl = 'https://www.example.com/?name=John Doe';
// let encodedUrl = encodeURIComponent(originalUrl);
// console.log(encodedUrl);


// #How do you define property on an Object constructor?
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }


