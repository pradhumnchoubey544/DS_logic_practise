
// //# how to add array at begning of array
// let arr = [1,2,3,4,5];
// let addelement = 0;
// let startarr = [addelement,...arr];
// console.log(startarr);
// //#how to add element at end of array
// let endarray = arr.slice(0,-1);
// console.log(endarray);






// //# How can you split a string into an Array?
// let sent = "my name is pradhumn";
// let spleat = sent.split(' ').reverse();
// console.log(spleat);// [ 'pradhumn', 'is', 'name', 'my' ]




let obj1 = {  "name":"rohon",
             "age": 12,
             "amount":1000
           }
// #How can you replace an existing element in an object?
let newobject = {
                   ...obj1,
                   "age":15
                }
console.log(newobject);
// #How can you add an element to an object?
let addobject = {
                ...obj1,
                "country":"india"
                }
console.log(addobject);
// #How can you remove an element from the beginning of the array?
// let removeelement = obj1.slice(1);
// console.log(removeelement);




