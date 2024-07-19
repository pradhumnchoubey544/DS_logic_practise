// what is closer in js:-
//closer is combination of (function + its lexical scope) bundel to gather form closer
// each and every function in js hase access to its outer laxical invorment that mean like access to (variable & function) which present in enviroment of its parent, so even this functiuon executed in another scope it still remamber its-outer-laxical enviroment (variable & function)where it is present in the code


//# advantahe of closers
// it help in moduler pattern
// it help in functional curring  concept alos
// used in HOC like memoise onse
// it help in DataHiding and Encaptulation 


//# disadvantage of closers
// there is overconsemtion of memory when closers form becouse this veriable are not gerbage colacted till program over
//Case 1:-
// function outer()
// {
//      var a = 30;
//      function inner()
//      {
//         console.log(a);  
//      }
//      var a = 40;     
//      return inner;
// }
// var res = outer(); res();  //  or we can write  "outer()();"   op 40 // becouse if var name is same it will show last decleration value like in case of "a"



//Case 2:- in this case we pass props "b" by outer("hello"); so inner function will print it becouse for inner veriable "b" is also lexical veriable becouse "b" is veriable of "outer()" function like closer
// function outer(b)
// {

//      function inner()
//      {
//         console.log(a,b);  
//      }
//      var a = 40;     
//      return inner;
// }
// var res = outer("hello"); 
// res();  // 10 hello




//Case 3:- nested function then what happend to closers  work ??
// function Upper() {
//     function Outer() {

//         function Inner(b) {
//             console.log(a, b);
//         }
//         var a = 40;
//         return Inner;
//     }
//     return Outer;
// }
// var close = ((Upper()))();
// close("hello");



//Case 3:- nested function we assine "a" two placess one is 40 and 80 which one should a take as closers 
// it take closest which is 40 and if we comment 40 then it take 80 and globle veriable for closers
/* 
function Upper() {
    function Outer() {

        function Inner(b) {
            console.log(a, b);
        }
        var a = 40;
        return Inner;
    }
    var a = 80;
    return Outer;
}
var close = ((Upper()))();
close("hello");

 */



// Case 4 - how does closer help in (Data-hoiding/Encaptulation) 
/* function Counter() {
    let count = 0;
    count++;
    this.increment = function () { count++; console.log(count); }
    this.decriment = function () { count--; console.log(count); }
}

var count1 = new Counter();
count1.increment();
count1.decriment();
count1.increment();
count1.increment();
count1.decriment();
count1.decriment();
count1.decriment();
 */



//case 5:- how to form closer in js  and how it stop gerbage-collaction in js
// if it is notmal function wethoud closers gerbage-collaction clean "a"
// but hear becouse of closes  can not clean "a" becouse it call by "f2()" any time which is using "a"
/* function f1() {
    let a = 10;
    return function f2() {
        console.log("a =", a);
    }
}
let showf2 = f1();
showf2();
 */













// akeshay sani video of scope 
// scop 
/* {
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a); */ // op 10
//console.log(b); //error 
//console.log(c); // error


/*// but we can not access var veriable outside of function 
 function f1(){
    var a = 1000;
    let b = 20;
    const c = 30;
}
console.log(a); // op 10 */


// sheadow in js










//////////////////////////////////////////////////////////////////////////
//Scope in depth


const username = 'pradhumn';
const userage = 34;
var aa = 10;
function add() {
    var x = 5;
    const y = 20;
    console.log(x + y);

    function child() {
        const a = 10;
    }
}
//console.log(x);// we can not access any variable outside of function scop do not metter what function it is ver,let,const we can not access
console.log(username);// we can access static-globe scop veriable 
console.log('program ended');








/////////////////////// /Example/////////////////////////////

function GlobleScope() {// we can access to all function / all over program
    function WindowObject() {
        var a = 10; // we can access it by window.nameOfVeriable   
    }
    function scriptScope() {// we can access to all function / all over program
        let a = 10;
        const b = 100;// we can access both diractly by name
    }
    function callStack() {  // this method will delete automaticly after executing in call stack

        function add() {
            //add:{}
            // thisObject{}
            // donot metter whihc type of veriabe or function can not be access out side of it 
            let i = 10;
            const j = 20;
            var k = 30;

            function child() {   // we can access all outer veriable inside inner functuion but can not access  veriable outside of its fucntion 
                //laxical scop of child() function is all nesded parent function which is called scop-cheaning and it can access all values from it/
                console.log(i + i);
                // closers:
            }
        }
        function subtract() {
            //subtract:{}
            // thisObject{}
            // donot metter whihc type of veriabe or function can not be access out side of it 
            let i = 10;
            const j = 20;
            var k = 30;



            // Block scope:-{} is called block but it is diff then "function f1(){}" this is function scope
            // where var,let,const can not go out side but in {} block scop we can access var out side block also
            // example of block is :- if(){},for(){},{},wilel{},dowile{}
            if (true) {
                let i = 10;    // it have block scop  
                const j = 20; // it have block scop
                var k = 30;  // it have functional scop
            }
            console.log(k);
            /* console.log(j);  // this two give error becouse let & const not acces outside of block
               console.log(i); */

        }
    }
}

/*
VAR will be undefined until they are assigned a value becouse it support "hoisting"
LET and CONST will be in "temporal dead zone" (TDZ) until memory execution is not done for them so that it give error and it not support "hoisting"
*/
/* 
if you are declearing any veriable like
a =100;
like this anywhere in code get store in "window" object 
you can access it anywhere in program from anywhere you decleare
# if you use 'use strict' in top of code then you can not write like this wethout veriabel you can not define veriable
# 'module scope' in js
*/









// block and module scope




























/* 

closers
lexical Scripe
hoisting
scope cheaning 
block scope
local scope

 */ 