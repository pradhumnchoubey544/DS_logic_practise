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
const [a, , c, ...rest1] = arr1; // (a print 1 ) , (2 is scip),(c will print 3) ,(all remaing vlaue show by ...rest rest-operater)
console.log(a, c, rest1); // 1 3 [ 4, 5, 6, 7 ]

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



// diff in rest and spread 
// rest mostlu use with function-perameter and method(max,min)
//spread mostly used with array and object



// spreadOperater
let ss = [1,2,3,4];
let ss2 = [10,20,30,40];
let newarr = [...ss,...ss2];// hear it will spread value of both array to become single array so it is spread operater 
console.log(newarr,"spreadOperater");// [1,2,3,4,10,20,30,40];


// restOperater
function f1(...ss) // hear how many number of argumet you give all will stor in  "...ss" so it is called rest opeater 
{
    
}

// restOperater
/// if we do desturing in array or object is called rest operater 
// hear now may vlaue you give first hold by "f" and second by "s" and "...KK" will stor all remaing value in it so that way it is called rest operate 
const [f,s,...KK] = ss;
console.log(KK);   





//## reat power of desturing will come with object so lets look to object desuturing

const obj1 = {
    name: "rohon",
    age: 25,
    addres: { city: "mandsour", home: 34 },
    color: "wight"
}
const obj2 = {
    name: "mohon",
    color: "black"
}

const {name:firstname , age:Age , faveratefood ="gamun"} = obj1; // ojbect desturing & by"name:firstname" we can change name of name to firstname & put default value also (faveratefood ="gamun") 
console.log(firstname,Age,faveratefood);

// object-desturing by spread-operater

const {name:newname,...rest} = obj1;   // hear alos name is shon by "newname" but all remaing values shown by "...rest" rest-operater
console.log(newname,rest);

// nested dsturing
const { name: myName, age, addres: {...newcity} } = obj1; //nested desturing addres: {...newcity}
console.log(myName, age, newcity); 

// now combine obj1 and obj2 and manke obj3 where what ever perameter not present with obj2 replace by obj1


const obj3 = {...obj1,...obj2};
console.log(obj3);// it is mixture of both obj1 and obj2



// object dusturing with object
function objectDesture(obj)
{
    console.log(`name is ${obj.name}& ${obj.age}`);
}
// or  we can write like this alos
function objectDesture2({name,age})
{
    console.log(`name is ${name}& ${age}`);
}
objectDesture(obj1);
objectDesture2(obj1);



const obj11 = {name:"shyam",age:12,add:"mandsour"}
const {name:newname1,age:newage1} = obj11;
console.log(newname1,newage1);
function f1({name,...newadd})
{
    console.log(name,newadd);
}
f1(obj11);


const arr = [1,2,3,4,5];
const arrarr = [1,2,3,4,5];
function f2([a,b,...c]) // rest operater 
{
    console.log(a,b,c);
}
f2(arr);
const arr33 = [...arr,...arrarr];
console.log(arr33);




