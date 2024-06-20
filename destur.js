/*
    desturing = take a array or object and convert then a small veriable ,object ,array is called desturing 

*/


const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = ["a", "b", "c", "d", "e", "f", "g"];

// priviesly we are doing this to gey any value from array
console.log(arr1[0]); console.log(arr2[0]);// to print any index value we can do like this like in case of to pring 4 index 
// but destruchering givew another way to do in more easy and perfact way

//like by destructuring 
// const [a,b,c] = arr1;
// console.log(a,b,c);

//if we want ot scipe "b"
// const [a,,c] = arr1; // hear it scip the second element 
// console.log(a,c);

//what if we want to show spread of value of arr1
const [a, , c, ...spread] = arr1; // (a print 1 ) , (2 is scip),(c will print 3) ,(all spread of vlaue show by ...spread spread-operater)
console.log(a, c, spread); // 1 3 [ 4, 5, 6, 7 ]

//by spread-operater we can merg two array into single array also
let arr3 = [...arr1, ...arr2];
console.log(arr3);
// we can do by array.concate metohd also but when come to object spead is vaey usefill  to combine tow objet togather
console.log(arr1.concat(arr2));



// by function  desturing
function math(x, y) {
    return [x + y, x * y];
}
const [mathx, mathy, mathz = 'no-devide'] = math(2, 3);  /// hear while doing array desturing we can set default value alos if function return will not give that vlaue in desturing-array
console.log(mathx, mathy, mathz);   //5 6 no-devide // if third value return by function return it show that vlaue otherwise "no-devide".


//## reat power of desturing will come with object so lets look to object desuturing

const obj1 = {
    name: "rohon",
    age: 25,
    addres: { city: "mandsour", home: 34 },
    color: "wight"
}
const obj2 = {
    name: "mohon",
    age: 20,
    addres: { city: "ratlam", home: 30 },
    color: "black"
}

const {name:firstname , age:Age , faveratefood ="gamun"} = obj1; // ojbect desturing & by"name:firstname" we can change name of name to firstname & put default value also (faveratefood ="gamun") 
console.log(firstname,Age,faveratefood);

// object-desturing by spread-operater

const {name:newname,...rest} = obj1;   
console.log(newname,rest);








// spreadOperater
let ss = [1,2,3,4];
let ss2 = [10,20,30,40];
let newarr = [...ss,...ss2];
console.log(newarr,"spreadOperater");


// restOperater
function f1(...ss) /// in this case we have to insert unlimeted argumnet in function is called rest operater ,becouse we can handel unlimeted argumen in it 
{
    
}


// restOperater
/// if we do desturing in array or object is called rest operater 
const [f,s,...rest1] = ss;
console.log(rest);   




