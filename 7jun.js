// Diff & where to use which { JSON.parce and JSON.stringfy }
// ###### USE of JSON.stringfy(object)   #######
// common use of JSON to send or resive data from client to server or visevarsa
// but the data shoud in {form:- "string"  & fromet:- JSON} then only it can travel 
// # case-1 (if we want to send javascript object first we have to conver it into string from EX given bellow )
let obj = {
    "name": "pradhumn",
    "age": 24,
    "height": 5.11,
    "weigth": "67 kg"
};

console.log(typeof (obj));
// obj type is (object) to send it to server from client we have to convert it into (string) form by using (stringify)
//*** So converting a js object into a string with (  JSON.stringify(object) )
console.log(JSON.stringify(obj)); // now it convert into (JSON-string) from {"name":"pradhumn","age":24,"height":5.11,"weigth":"67 kg"}

// OR by one more exaple //
let obj2 = {
    "accountDetails": ["SBI", "HDFC", "panjab", "UDC"]
};
let JsonString = JSON.stringify(obj2);// first we have to convart from object to string form 
console.log(typeof (JsonString));  // type is stirng
console.log(JsonString);
//  { "accountDetails":["SBI","HDFC","panjab","UDC"]  };   ---->  {"accountDetails":["SBI","HDFC","panjab","UDC"]}

//** While the converted JSON string looks similar to the original object, it's important to remember that they're different data types. Objects are native JavaScript structures, while JSON strings are text representations of these objects.
//** You can use JSON.parse(jsonString) to convert the JSON string back into a JavaScript object, but in this case, it would simply recreate the original obj2 object.




// ######   USE of  JSON.parce(string)   #######
// now what data we get from server its in JSON-stirng  then we can not display & access inner values of it 
// So to conver it into again Object from we have to use JSON.parce(string)
// now take that "JsonString" which is JSON-stirng from and convert into Object from

let objectForm = JSON.parse(JsonString);
console.log(typeof (objectForm));
console.log(objectForm);


//  ######### let objectForm = JSON.parse(JsonString); we get JSON-string to object from  { accountDetails: [ 'SBI', 'HDFC', 'panjab', 'UDC' ] }     
//   &&&&
// ######### let JsonString =  JSON.stringify(obj2);  we get object to JSON-string from  {"accountDetails":["SBI","HDFC","panjab","UDC"]}






// # how to extract few field from objct 
let input = {
    "student": [
        {
            "name": "pradhumn",
            id: 10
        },
        {
            "name": "rohon",
            id: 20
        },
        {
            "name": "sohon",
            id: 30
        },
        {
            "name": "mohon",
            id: 40
        }
        
    ]
}
console.log(typeof(input))  // allready it is in object form for we have to dispaly particuler data on page.
let op = input.student.map((item)=>{return item.name});
console.log(op); // hear it display all name in array from beocue map will return array from only [ 'pradhumn', 'rohon', 'sohon' ]
// alos you can manuplate any thing and return from array





// //# Filter the given object based on certain conditions and return the corresponding object?
// // suppose we have to filter whose id is greater then 20 
// //let filterObj = input.student.filter((item)=>{ item.id > 20 ? item : [];  })
// let filterObj = input.student.filter((item) =>{return item.id > 20});
// //You cannot use a traditional if...else statement within the callback function of the filter() method in JavaScript.
// console.log(filterObj);




// # how to chaek whether it is array of not 
//let stu = ["rohon","sohon","mohon"];
//console.log(Array.isArray(stu)); // "true" mean  it is array type




//# How to check if an object is present in an Array or not?
//# How to empty an array?
//# What is IIFEs (Immediately Invoked Function Expressions)?
// diff in normal function and IIFE function it can emedatly executed after creation where as normal function will call manualy 
(function f1()
{
    console.log("hello it is IIFE function");
})();  /// there is not need to call any thing it will execute automaticaly 





//# How to empty an array? there is 5 eay
//let arr= [1,2,3,4,5,6];
//1) by assining a empty array to data array
//arr=[]; console.log(arr); 
// 2) by assining length 0
//arr.length = 0;
//3)by slice method
//arr = arr.splice(0,arr);
//4)by while loop and pop() method
// while(arr.length > 0)
//     {
//         arr.pop();
//     }
// console.log(arr);





// #How can you combine two Arrays into a third Array using spread operator?
// let arr1 = [1,2,3,4,5];
// let arr2 = [10,20,30,40,50];
// let newarr = [...arr1,...arr2];
// console.log(newarr);




// #How do you reverse an array without changing the original array?
// let arr = ['g','a','s','r','d','a'];
// let newarr = arr.slice().reverse();
// console.log(newarr);



//# How can you Replace an element at a specific index in an Array?
//let arr = [1,2,3,4,6,7]; // i have to insert 5 on its spacific index;
// arr[3] = 5;
// console.log(arr);
// Or
// const replaceIndex = 4;
// const element = 5;
// const newarr = [...arr.slice(0,replaceIndex),element, ...arr.slice(replaceIndex+1)];
// console.log(newarr);[ 1, 2, 3, 5, 6, 7]




// #How can you Insert an element at a specific index in an Array?
// let arr = [1,2,3,4,6,7];
// const replaceIndex = 4;
// const element = 5;
// const newarr = [...arr.slice(0,replaceIndex),element, ...arr.slice(replaceIndex)];
// console.log(newarr);// [ 1, 2, 3, 4, 5, 6, 7]



// #How can you Delete an element at a specific index in an Array?
// let arr = [1,2,3,4,6,7];
// const deleteIndex = 4;
// const newarr = [...arr.slice(0,deleteIndex),...arr.slice(deleteIndex+1)];
// console.log(newarr);