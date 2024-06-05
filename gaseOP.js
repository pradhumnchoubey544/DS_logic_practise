//#1
// console.log("1");
// setTimeout(()=>{console.log("2")},1000);
// setTimeout(()=>{console.log("3")},0);
// console.log("4");
//op:-  1 4 3 2


//#2
// setTimeout(() => {
//      console.log(x);
//      var x = 10;
// },1000);
// op:-  after 1000 second undefine becouse for perfoning {housting} wethout declear at least  you have to define that varaiable like bottem
// setTimeout(() => {
//     x=10;
//     console.log(x);
//     var x;
// },1000);


//#3
// let count = 0;
// function f1()
// {
//     if(count == 0)
//     {
//        let count = 3;
//         console.log("count1",count);
//     }
//     console.log("count2",count);
// }
// f1();
// another way 
// var count = 0;
// function f1()
// {
//     if(count == 0)
//     {
//        let count = 3;
//         console.log("count1",count);
//     }
//     console.log("count2",count);
// }
// f1(); 
// hear in if{} there is scope of  let count = 3; but out side of it scop of var count = 0; so OP:  count1 3 count2 0



//#4 
//console.log(typeof(1+"1"));   // 11  it is string type 
//console.log(typeof(1-"1"));   // 0   it is number type 
//console.log(typeof("1"-1));   // 0   it is number type 


//#5 diff in foreach() and map() method cheark by array;
// let arr = [1,2,3,4,5];
// let a = arr.map((ele)=>{return ele*2}); // map will return new array 
// // let b = arr.forEach((ele)=>{let k = ele*2});  // it will assine undefien becouse foreach will not return any thing So
// arr.forEach((ele,i)=>{arr[i]=ele*2}); // we change in existing array only 
// console.log(a); // map value give new array 
// console.log(arr); // foreach value  we copy data in existing array



// #6 Amstrong number :- number which each degit Queb sum is equal to that numbwer is called Amstrong number .
// var mainnum= 371;
// var num = mainnum ;
// let totelsum = 0;
// let length = num.toString().length  // {num.toString().length} it will give you length of number 
// for(let i = 0;i<=length ;i++)
//     {   
//          let digit = num%10; // it give last value of number like first 1, second 7, third 3
//          totelsum =totelsum + digit**length;// or queb = digit*digit*digit; // to find queb
//          num = parseInt(num/10); // it will remove last value of num one by one 
//     }
// console.log(totelsum == mainnum ? "it is Amstrong number":"it is not Amstrong number");


// #7  printing table 
// let num = 4;
// for(let i = 1;i<=10;i++)
//     {console.log(`${num}*${1}=${num*i}`)};


//#8 how to find perticuler cheracter occerance in string 
// let string = "   hello my name is pradhumn"; // give stirng 
// let cleanString = string.split(' ').join(''); // this will remove all space from start,middel,end 
// let find = 'm';  // this cheracter occerace we have to find 
// let map = new Map();
// for(let i = 0 ;i<= cleanString.length-1;i++)
// {   
//     if(map.has(cleanString[i])) //it will cheak weather this key {cleanString[i]} is presnet or not.
//     {  map.set(cleanString[i],map.get(cleanString[i])+1); } //set(key,value) used to insert new key & get() ??
//     else(map.set(cleanString[i],1));  
// }
// console.log(map);
//  console.log(map.get(find)); // if we pass key it give vlaue 










