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





// Case 4 - how does closer help in (Data-hoiding/Encaptulation) 
function Counter()
{
    let count = 0;
    count++;
    this.increment = function(){count++;  console.log(count);}
    this.decriment = function(){count--;  console.log(count);}
}

var count1 = new Counter();
count1.increment();
count1.decriment();
count1.increment();
count1.increment();
count1.decriment();
count1.decriment();
count1.decriment();




//case 5:- how to form closer in js  and how it stop gerbage-collaction in js
// if it is notmal function wethoud closers gerbage-collaction clean "a"
// but hear becouse of closes  can not clean "a" becouse it call by "f2()" any time which is using "a"
function f1()
{
    let a = 10;
    return function f2()
    {
        console.log("a =",a);
    }
}
let showf2 = f1();
showf2();  




