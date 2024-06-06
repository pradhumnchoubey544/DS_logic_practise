

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
// let ArrObj =
//     [
//         {
//             id: 1, name: "ram", age: 19
//         },
//         {
//             id: 2, name: "shyam", age: 29
//         }, 
//         {
//             id: 3, name: "sita", age: 20
//         },
//         {
//             id: 4, name: "gata", age: 30
//         },
//         {
//             id: 5, name: "mona", age: 11
//         }
//     ]
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
// let arr1 =[1,2,3];
// let arr2 =[4,5,6];
// const margearray =(arr1,arr2)=>{return arr1.concat(...arr2); // or return [...arr1,...arr2]; or return arr1.push(...arr2);                        
// }
// console.log(margearray(arr1,arr2));






// # write function that revers the string 
// let string = "hello i am pradhumn";
// let reversedString = string.split(' ').reverse().join('');
// console.log(reversedString);
//the String object in JavaScript does not have a reverse method.
// **You need to split the string into an array of characters, reverse the array, and then join the array back into a string. 
// let arraystring = string.split(' ');
// let newstirng;
// let arr = [];
// for(let i = arraystring.length-1;i>=0;i--)
// {
//  arr.push(arraystring[i]);  // allways use push to push the code 
// }





//# write a function that return a longest word in sentence
// let sen = "hello i am pradhumn choubey";
// let map = new Map();
// let senArr = sen.split(' ');
// let maxword;
// let count=0;
// for(let i = 0;i<senArr.length;i++)
// {
//     map.set(senArr[i],senArr[i].length);
//     if(count < senArr[i].length)
//     {   count = senArr[i].length
//         maxword = senArr[i]
//     }
// }
// console.log(map);
// console.log(count,maxword);




//# write function that cheak given string is pelendrom or not 
// let str = "ramimar";
// let result =(str)=>{
// for (let i = 0; i < str.length / 2 ; i++) 
//     {
//     if (str[i] !== str[str.length - i - 1]) return false;    
//     }
//     return true;
// }
// console.log(result(str));





// # Write a function to remove duplicate elements from an array.
// let arr = [1,2,3,4,1,2,4,6,7];
// let newarr=[];
// for(let i =0;i<= arr.length-1;i++)
//     {
//     if(!newarr.includes(arr[i]))
//     {
//         newarr.push(arr[i])
//     }
//     }
//     console.log(newarr);


//# Write a function that checks whether two strings are anagrams or not?
//anagrams mean same-number-of-cher presnet in both string .
// let str1 = "aabbcrefg"; 
// let str2 = "afercbab"

// let map = new Map();

// for(let i = 0;i<=str1.length-1 ;i++)
// {
//     if(map.has(str1.charAt(i)))
//     {
//           map.set(str1.charAt(i),map.get(str1.charAt(i))+1)
//     }else{
//           map.set(str1.charAt(i),1);
//     }
// }
// for(let i = 0;i<=str2.length-1 ;i++)
//     {
//        if(map.get(str2.charAt(i)) > 1)
//        {
//           map.set(str2.charAt(i),map.get(str2.charAt(i))-1);
//        }else if(map.get(str2.charAt(i)) == 1)
//             {
//                   map.delete(str2.charAt(i))
//             }
//     }
// if(map.size !== 0)  // hear we put !== so we have to write nagative statment "it is not anagram";
//      console.log("it is not anagram")
// else console.log("it is anagram")