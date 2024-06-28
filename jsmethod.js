// in object every key shoud be unique otherwise it will lake last key of object by-default 
const obj = {
    name: "Alice",
    age: 30,
    name: "Bob" // Duplicate key
};
console.log(obj); // Output: { name: "Bob", age: 30 





// reduse method
//case 1:-
const arr = [1, 2, 3, 4, 5];
arr.reduce((accumelater, iterater) => { console.log(`ecc ${accumelater}, acc ${iterater}`); return accumelater + iterater; }, 10);
/* 
iterater will iterate and stor sum in accumelater in each iteration 
ecc 10, acc 1
ecc 11, acc 2
ecc 13, acc 3
ecc 16, acc 4
ecc 20, acc 5
*/


//case 2:-  totelage is accumelater, ele is iterater ,
const arr2 = [{ name: "rohon", age: 12 }, { name: "mohon", age: 11 }, { name: "sohon", age: 32 }, { name: "gohon", age: 11 }]
const totelage = arr2.reduce((totelage, ele) => { console.log(`ele ${ele.age} and totelage ${totelage}`); return ele.age + totelage }, 0);
console.log(totelage);

//case 3:-
const getnewobj = arr2.reduce((newobj, person) => {
    let age = person.age;
    if (newobj[age] == null) { newobj[age] = [] }  // why hear it "newobj[age]" is used becouse newobj is object when why it is using [];
    newobj[age].push(person);
    return newobj;
}, {});
console.log(getnewobj);



//case 4:-convert this two dimantion array into key value pairs object
const twoDArray = [["name", "rohon"], ["age", 4], ["add", "mand"]];

const Obj = twoDArray.reduce((emptyObj, ele) => {
    let key = ele[0];
    let value = ele[1];
    emptyObj[key] = value;  // hear we put each kay and its corrosponding value in it
    return emptyObj;
}, {})
console.log(Obj);


//case: -5 find max age
console.log("hello");

let nn = [1, 2, 3, 4, 5];
const value = nn.reduce((acc, ele) => {
    console.log(ele, acc); // [(1 0) (2 1) (3 2) (4 3) (5 4)] what comes in (ele) in first iteration that vlaue is assine to (acc) bydefalut
    return ele;

}, 0)
console.log("VALUE", value);





const maxage = arr2.reduce((acc, ele) => {
    if (acc < ele.age) { console.log("***", acc, ele.age); return ele.age }  /// it will iterat for all array element but when condition satisfy it return from in-between only,other-wise it stop execution for each iteration before last return and at last it reurn (last-return)
    console.log("---", acc, ele.age);
    return acc;
}, 0)
console.log(maxage);




const arrayString = ["red", "blue", "green", "red", "blue", "green", "red"];
let objOccerance = arrayString.reduce((newobj, ele) => {
    if (newobj[ele]) { newobj[ele]++ } else newobj[ele] = 1;
    return newobj;
}, {})
console.log(objOccerance);






// case: find remaing vlaue 
let arr12 = [10, 2, 5];
let count = 10;
let remainArr = [];
for (let i = 1; i < count; i++) {
    if (!arr12.includes(i)) { remainArr.push(i) }
}
console.log(remainArr);




//case: remove _ by space and capalise the letter after the _
let string = "uv_ram_shyam_jay"
const capitalizedWords = string.split("_").map((word, index) => {
    if (index === 0) return word;
    const firstChar = word.charAt(0).toUpperCase();
    const remaining = word.slice(1);
    return firstChar + remaining;
});
const newstring = capitalizedWords.join(" ");
console.log(newstring);




// do viceversa convert "uv Ram Shyam Jay" to "uv_ram_shyam_jay"
const vistirng = newstring.split(" ").map((ele, index) => {
    if (index === 0) return ele;
    let lowercase = ele.charAt(0).toLowerCase();
    let remaining = ele.slice(1);
    return lowercase + remaining;
})
let viNewString = vistirng.join("_");
console.log(viNewString);

ht



// occerance of boy and girl
let boy = 0;
let students = [
    { name: "rohon", "gender": "girl" },
    { name: "mohon", "gender": "boy" },
    { name: "sohon", "gender": "boy" },
    { name: "gohon", "gender": "boy" }
]
for (let i = 0; i < students.length; i++) {
    if (students[i].gender == "boy") {
        boy++;
    }
}
console.log(boy);
// or by reduce method 
let reduceboy = students.reduce((acc, itt) => { if (itt.gender == "boy") acc++; return acc }, 0);
console.log("boys", reduceboy);



// # sort the array of object based on age
let SortObj = [
    { name: "rohon", "gender": "girl", age: 32 },
    { name: "mohon", "gender": "boy", age: 42 },
    { name: "sohon", "gender": "boy", age: 88 },
    { name: "gohon", "gender": "boy", age: 11 }
]

let SortNewObj = SortObj.map((ele)=>{
    return ele.age;
})
console.log(SortNewObj);


//console.log(SortObj.Sort());






// slice and splice  method in js 
// slice: Extracts a portion of the array, leaving the original array untouched (think copy).
// splice: Modifies the original array by removing/replacing elements (think edit).

//slice
let array = [11,44,22,66,44,33,66];
let slicearray = array.slice(0,3); // hear he take out slice arr[0,1,2] it take one less then give last value like hear (3-1 =2) it give vlaue till 2 index 
let slicearray2 = array.slice(3) // if you give single vlaue it cut that many vlaue from starting 
console.log(slicearray); //[ 11, 44, 22 ]
console.log(slicearray2);//[ 66, 44, 33, 66 ]
console.log(array);// slice will not change in orignal array 

//splice
let arrSplice = array.splice(1,3,"hi"); // splice(starting-index,number of values remove from starting,what ever come after secod values it insert at the place of removed value area);
console.log(arrSplice); // [ 44, 22, 66 ] it retrun all values it take out 
console.log(array);// [ 11, 'hi', 44, 33, 66 ]  splice can change in orignal array 


let array1 = [11,44,22,66,44,33,66];
array1.splice(2,5,'hi','by','ni','er');
console.log(array1);// [ 11, 44, 'hi', 'by', 'ni', 'er' ]



