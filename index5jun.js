//# febonachi series {0,1,1,2,3,5,8,13}
// let length = 10;
// let a = 0;     // consited a as 0
// let b = 1;     // consited b as 1
// let arr = [];
// for(let i = 0;i<=10-1;i++)
// {
//      arr[i] = a + b;  // start by (0+1) then swipe {a by b}&{b by arr[i]} 
//      a = b;           //(a = b) so a = 1 1 2 3 5 8 13 21 34 55 
//      b = arr[i];      //(b = arr[i]) so b = 1 2 3 5 8 13 21 34 55 89
// }
// console.log(arr);


//# convert first letter in upper case 
// let string= "hello my name is pradhumn";
// console.log(typeof(string));
// let k = string.split(" ");  // it spleat all word based on space assine as array
// console.log(k);
// for(let i = 0;i<=k.length-1;i++)
// {
//      k[i] = k[i].charAt(0).toUpperCase()+ k[i].slice(1);  // hear k[i].charAt(0).toUpperCase() will take out first cherater and convert in upper case 
//                                                           // and  k[i].slice(1) will remove first cheracter and add all remain cher after capital character.
// }
// console.log(k.join(" ")); // it will convert from array to string;




//# operation on this array of object 
let ArrObj =
    [
        {
            id: 1, name: "ram", age: 19
        },
        {
            id: 2, name: "shyam", age: 29
        }, 
        {
            id: 3, name: "sita", age: 20
        },
        {
            id: 4, name: "gata", age: 30
        },
        {
            id: 5, name: "mona", age: 11
        }
    ]
//# first way ///
//     let k = function (ArrObj,findname)
//     {
//          for(let i = 0;i<=ArrObj.length;i++)
//             {
//                 if(ArrObj[i]?.name == findname)
//                     {
//                         return ArrObj[i];
//                     }
//             }
//             return false;
//     }
//   console.log(k(ArrObj,'shyamo'));

// # second by find method  
// let k = ArrObj.find((ele)=>{ return ele.name == 'shyam'});
// console.log(k == undefined? "name not found":"name is found");

// # third by findIndex method  
//  let k = ArrObj.findIndex((ele)=>{ return ele.name == 'ram'});
//  console.log(ArrObj[k] == undefined? "name not found":"name is found");


// # add element to array wethout effecting existing array
// let arr = [1,2,3];
// let append=(arr,...ele)=>{
//     return[...arr,...ele]
// }
// console.log(arr);
// console.log(append(arr,4,5,6));
// console.log(arr);


// # from a existirg array assine all unique element in new array
// let existingarr = [1,2,3,2,1,4,5,6];
// let newarr = [];
// existingarr.forEach((ele)=>{         // we can use if-else in foreach also
//     if(!newarr.includes(ele)){       // includes will cheak weather this ele is presne or not 
//            newarr.push(ele);
//     }
// })
// console.log(newarr);
//**  second short short way
// let existingarr = [1,2,3,2,1,4,5,6];
// function arrsort(existingarr)
// {
//     return [...new Set(existingarr)]; // we created object of Set which will give object in this way Set(6) { 1, 2, 3, 4, 5, 6 }
//                                       // to convert in into array [...new Set(existingarr)]
// }
// console.log(arrsort(existingarr));
// console.log(new Set(existingarr));
//**  Third way by reduse 
// let existingarr = [1,2,3,2,1,4,5,6];
//  let k = existingarr.reduce((acc,ele)=>{
//     return acc.includes(ele) ? acc : [...acc,ele];
//     },[])
//  console.log(k);


//# merge two array by concate()
let arr1 =[1,2,3];
let arr2 =[4,5,6];
const margearray =(arr1,arr2)=>{return arr1.concat(...arr2); // or return [...arr1,...arr2]; or return arr1.push(...arr2);                        
}
console.log(margearray(arr1,arr2));


