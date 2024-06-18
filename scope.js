// what is closer in js:-
//closer is combination of (function + its lexical scope) bundel to gather form closer
// each and every function in js hase access to its outer laxical invorment that mean like access to (variable & function) which present in enviroment of its parent, so even this functiuon executed in another scope it still remamber its-outer-laxical enviroment (variable & function)where it is present in the code


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




//Case 3:- nested function then what happend to closers 
function upper() {
    function Outer() {

        function inner() {
            console.log(a, b);
        }
        var a = 40;
        return inner;

    }
    return Outer;
}
var resupper = upper();
var resinner = resupper();
var resinner // 10 hello
