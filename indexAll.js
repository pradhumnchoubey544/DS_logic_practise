// Coding

// const arr = [1, 2, 3]; console.log(arr[0]); // Output: 1 const str = "hello"; console.log(str[0]); // Output: 'h' const obj = { a: 1, b: 2, c: 3 }; console.log(obj['a']); // Output: 1     Coding

// Programming topic Create a Stopwatch
// Fetch and Display Data
// To-Do List Application
// Form with Validation
// Weather App
// Counter Component
// CRUD Operations
// Authentication Flow
// Search and Filter
// Image Gallery
// Pagination
// Modal Dialog
// Drag and Drop
// Responsive Design
// Debounce Search Input
// Infinite Scrolling
// Dark Mode Toggle
// Nested Components
// Real-time Updates
// Redux Implementation


// //how to find factorail of any giving intiger in js
// // let a = 5;
// // let factorial = 1;
// // for(let i = 1;i<= a;i++)
// // {
// //      factorial= factorial*i;
// // }
// // console.log( factorial);
// //----------------------------------------------
// // compait two are are equal or not # now compair by each element 
// //let arr1= [1,2,3,4,5,6];
// // let arr2= [1,2,3,4,5,6];
// // let equal ="yes";
// // for(let i=1;i<=(arr1.length || arr1.length);i++)
// // {
// //     arr1[i] == arr2[i];
// //     if(arr1[i] != arr2[i]){ equal="no"; }
// // }
// // console.log(equal);
// //----------------------------------------------
// // find the union of both array 
// // let arr1= [1,2,3,4,5,6];
// // let arr2= [1,2,3,4,7,8];
 
// // let arr0 = [...arr1,...arr2];
// // let x = arr0.filter((ele,index,arr)=>{arr.indexOf(ele) != index });
// // console.log(x);
// //----------------------------------------------
// // find pelendrom string in string 
// // let ss = "madam";
// // function pelendrom(str)
// // { return str == str.split('').reverse().join('');
// // }
// // console.log(pelendrom(ss));
// //----------------------------------------------
// // reverse a group of string 
// // let myString = "rohon123";
// // reverse() method is a method of arrays in JavaScript, not of string
// // When you call reverse() directly on a string,
// // function f2(mystring){return mystring.split('').reverse().join('');}
// // console.log(f1(myString));
// // console.log(f2(myString));
// //----------------------------------------------
// // JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
// // let arr1 = [1,2,3,4,5,6];
// // let arr2 = arr1.filter((ele,index,arr)=>{ return  ele%2 == 0})
// // console.log(arr2);
// //----------------------------------------------
// // let arr = [[1,2,3],[3,4,5],[6,5,8]];
// // for(let i = 0;i<arr.length;i++)
// // {
// //     for(let j= 0;j<arr[i].length;j++)
// //     {
// //       console.log(arr[i][j];)
// //     }
// // }
// // 
// let arr = [[1, 2, 3], [3, 4, 5], [6, 5, 8]];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }






// // function debounce(func, delay)
// // { 
// //   let timer; 
// //   return function() { 
// //                      clearTimeout(timer); 
// //                      timer = setTimeout(func, delay); 
// //                     }; 
// // } 
// //----------------------------------------------------------------

// // let arr = ["hello","world","java","hello","java"];
// // let a = arr.reduce((newArr,ele)=>{ if(ele in newArr){newArr[ele]++}
// //                                                 else{newArr[ele]=1
// //                                                     }  
// //                                   return newArr;    
// //                                  },{});
// // console.log(a);

// // by using object method
// // let arr = ["hello","world","java","hello","java"]
// // let newarr =[];
// // arr.forEach((ele)=>{   if(newarr[ele]){ newarr[ele]++ }
// //                         else{newarr[ele] = 1 } 
// //                     })
// //  console.log(newarr);
// //----------------------------------------------------------------
// // let arr = [{name:"rohon",age:21},{name:"sohon",age:21},{name:"mohon",age:20}];
// // let newArr={}

// // arr.forEach((ele)=>{ 
// //               if(!newArr[ele.age])
// //                  { newArr[ele.age]= [ele];}
// //               else
// //                  {newArr[ele.age].push(ele);}
// // })
// // console.log(newArr);
// //----------------------------------------------------------------
// let arr = [1, 9, 3, 5, 6,4];
// let targetSum = 7;

// for (let i = 0; i < arr.length; i++) {
    
//     let complement = targetSum - arr[i];
    
//    if(arr.includes(complement))
//    { console.log(`${complement}+${arr[i]}=${targetSum}`);
//      break;
//    }
// }
// //----------------------------------------------------------------
// let arr = [{name:"rohon"},{name:"mohon"},{name:"sohon"},{name:"yohon"}];
// function shift(ele,index)
// {
//       let k = arr[index];
//       arr[index]=arr[ele];
//       arr[ele]=k;
// }
// shift(1,0)
// console.log(arr);
// //----------------------------------------------------------------
// // missing number from art
// let ar = [1,3,4,6,7,8,10];
// function missing(a){
//   let missing = [];
//   for(let i=0;i<ar.length;i++)
//     {
//         if((ar[i+1]-ar[i] != 1 ) && (ar[i+1] != undefined))
//         {
//             missing.push(ar[i]+1);
//         }
//     }
//     return missing;
// }
// console.log(missing(ar));
// //----------------------------------------------------------------
// // find nth largest number 
// let ar = [1,3,4,6,7,8,10];
// let n = 3;
// let sort = ar.sort((a,b)=> a-b);
// let nthNumber = ar[ar.length-n];
// console.log(nthNumber);
// //----------------------------------------------------------------
// let ar = [1,3,4,6,7,8,10,1,2,3];
// let k = ar.filter((ele,index,ar)=>{ return ar.indexOf(ele)==index; })
// console.log(k);
// //----------------------------------------------------------------
// // give me array of all bookes from this //
// let Edu = [
//             {name:"rohon",books:['gita','bibal','curan'],age:21}
//            ,{name:"rohon",books:['gita1','bibal1','curan'],age:22}
//            ,{name:"rohon",books:['git[a2','bibal2','curan2'],age:22}
//           ]
// /----------------------------------------------------------------
// let result = Edu.reduce((accumulator,currentValue)=>{
//     return [...accumulator,...currentValue.books];
// },[])
// console.log(result);
// /----------------------------------------------------------------
// // reverse string 
// // let s = "rohonSherma"
// // const reverse = s.split('').reverse().join('');
// // console.log(reverse);
// //————————————————————————————————
// // remove duplicate from array by using [Set] // let aa = [1, 2, 3, 4, 5, 1, 2, 3];
// // const newarr = aa => [...new Set(aa)];
// // console.log(newarr(aa)); //OR let aa = [1, 2, 3, 4, 5, 1, 2, 3];
// let k =  [...new Set(aa)];
// console.log(k); //————————————————————————————————
// const currentDate = new Date();
// let year = currentDate.getFullYear();
// let month = currentDate.getMonth()+1;
// let day = currentDate.getDay();
// console.log(`${day}-${month}-${year}`);
// console.log(`${currentDate.getDay()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`);
// //————————————————————————————————
// // calculate the cumulative sum of an array? let a = [11,22,33,44,55,66];
// let k = [];
// for(let i= 0; i < a.length - 1 ; i++)
// {
//     k[i] = a[i] + a[i + 1];
// }
// console.log(k); /———————————————————————————————— 
// let s = "alalss";
// let t = "lalsas";


// if (s.length !== t.length) {
//     console.log("false");
// } else {
//     let sArray = Array.from(s);
//     let tArray = Array.from(t);
    
//     sArray.sort();
//     tArray.sort();

//     for (let i = 0; i < sArray.length; i++) {
//         if (sArray[i] !== tArray[i]) {
//             console.log("false");
//             break;
//         }
//     }
    
//     console.log("true");
// }
// ———————————————————————————————— /// convert this string in sepreat array based on space
// let s = "rohon chobey";
// function f1(s)
// {
//     return s.split(" ");
// }
// let k = f1(s);
// console.log(k);
// ————————————————————————————————
// // function f2(s,n)
// // {
// //     return s.slice(0,n);
// // }
// // let k= f3("rohon",2);
// // console.log(k);
// // console.log(s);
// // import React ,{useState} from "react",;
// // import "./style.css";
// // const data = [
// //   {id:1001, value:"value1"}
// //   ,{id:1002, value:"value2"}
// //   ,{id:1003, value:"value3"}
// //   ,{id:1004, value:"value4"},
// //   {id:1005, value:"value5"}
// // ]
// // export default function App() {
// //     const [SelectedValues,SetSelectedValues]= useState([]);
// // const hendlecheck=(id)={

// //   SetSelectedValues(      (prov) => { 
// //                                       (prov.includes(id)?  prov.filter(value => value != id):[...prov,id]););
// //                                     }
// //                    )
// // }
// //   return (
// //     <div>
     
// //       {

// //                data.map(item=>(

// //                  <label key ={item.id}>

// //                        <input 
// //                          type ="checkbox"
// //                          value={item.id}
// //                          onchange={()=>{hendlecheck(item.id)}}
// //                         //  cheaaked={selectedvalues.}
// //                     />
// //                     {item.value}
// //                 </label>       
// //               ) )
// //         }


// //     </div>
// //   );
// // }
// {  
//   "name":"pradhumn", 
//   "age":30,
//   "lenguage":"english",
//   "subject":["english","hindi","urdu"],
//   "domain":"tester",
//   "underAge":true,
//   "heinght":5.8,
//   "address":[{"city":"mandsour","homeNo":12},{"city":"mandsour","homeNo":12},{"city":"mandsour","homeNo":12}{"city":"mandsour","homeNo":12}]
// }
// // function f2(s,n)
// ————————————————————————————————
// // find starting tuber of array 
// first =  function(array,start,end) {
//        if (array == null) return void 0;
//      if (start < 0 && end > 0) start = 0 ;
//      return (end == null || end == undefined ) ? array.slice(start):array.slice(start,end);
//   };
// console.log(first([7, 9, 0, -2],2));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],1,0));
// console.log('hello')
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// ————————————————————————————————
// // (error) // first =  function(array,end,start) {
  
// //      if (array == null) return void 0;
// //      if (start < 0 && end > 0) start = 0 ;
// //      return (end == null || end == undefined ) ? array.slice(start): array.slice(start,end);
  
// //   };
// // console.log(first([7, 9, 0, -2],2));
// // console.log(first([],3));
// // console.log(first([7, 9, 0, -2],1,0));
// // console.log('hello')
// // console.log(first([7, 9, 0, -2],6));
// // console.log(first([7, 9, 0, -2],-3));
// //  let newarray = [];

// // let first =function ff(array,n) {
// //     if (array == null) return void 0;
// //     if (n == 0) return array[array.length-1];
  
// //     let  k = array.length-n;
// //     let start = Math.max(array.length - n, 0);
// //     console.log(`n:${k});
  
// //     for (let j = start; j < array.length; j++) {
// //         newarray.push(array[j]); 
// //     }
// //    return newarray;
// //   };
// //  console.log(first([7, 9, 0,2,4],3));
// // let first = function(array) {
// //     for (let i = 0; i < array.length; i++) {
// //         console.log(`${array[i]} == ${i} = ${array.length}`);
// //     }
// //     return array; // Return the array or any other value you need
// // };
// // console.log(first([7, 9, 0, 2, 4]));
// ————————————————————————————————
// // converting all element of array into string . let myColor = ["pradhumn","is","very","bad","boy"];
// console.log(myColor.toString());  // to convert a array to string    
// console.log(myColor.join('+'));  // it join it 

// // pradhumn,is,very,bad,boy
// // pradhumn+is+very+bad+boy 
// ————————————————————————————————

// // Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
// let passvalue = function modify(n)
// {
//     let s = n.toString();
//     let newarr = [];
//     for(let i = 0 ; i <= s.length-1;i++)
//     {
//        s[i]%2==0 ? newarr.push(-s[i]): newarr.push(parseInt(s[i])); 
//     }
//     return newarr.toString().replace(/,/g, '');
// }
// console.log(passvalue(234524));
// // 0-254-6-8

// ————————————————————————————————
// let arr = [10, 9, 4, 2, 5, 3];
// function bubbleSort(arr) {
//     let len = arr.length;
//     console.log(`${arr} ok`);
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - 1; j++) {
          
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
//             }
//             console.log(arr);
         
//         }
//        console.log("-------")
//     }
//     return arr;
// }
// console.log(bubbleSort(arr)); 
// ————————————————————————————————
// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var l = arr1.length;
// var count = 0;
// var funalcount=1;
// var item;

// for (let i = 0;i< l;i++)
// { count = 0;
//   for(let j = i;j< l;j++)
//     {
//        if(arr1[i]==arr1[j]) count++;
//        if(funalcount < count){funalcount = count;
//                                 item=arr1[i];
//                              }
//     }
  
// }
// console.log(`${item} is ${funalcount} `);
// ————————————————————————————————
// // var s= 'The Quick Brown Fox';
// // for(let i = 0;i<=s.length;i++)
// // {
// //   if(s[i] == s[i].toUpperCase()){s[i]=s[i].toLowerCase();}
// //   else{s[i]=s[i].toUpperCase();}
// // }
// // console.log(s);
// /// by using "result veriabel"
// // var s= 'The Quick Brown Fox';
// // var result = '';
// // for(let i = 0;i< s.length;i++)
// // {
// //   if(s[i] == s[i].toUpperCase()){result += s[i].toLowerCase();}
// //   else{result += s[i].toUpperCase();}

// // }
// // console.log(result);

// ————————————————————————————————

// let arr = [2,3,4,5,4,3,2,6,7,'a','b','c','a','c','d','A','X','x'];
// // let lowercaseArr = arr.map(ele => (typeof ele == 'string' ? ele.toLowerCase():ele));
// // let x = lowercaseArr.filter((ele,index,anewarr)=>{return anewarr.indexOf(ele)==index});
// // console.log(x);

// let newarr=[];

// let arr1 =[];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].toLowerCase();
// }

// for(let i = 0;i < arr.length ;i++)
//   {
//     if(arr.indexOf(arr[i]) === i)        
//     { 
//       newarr.push(arr[i]);
//     }
//   };
// console.log(newarr);
// // console.log(arr1);


// ————————————————————————————————
// // leap year
// let ans = function(year)      
// {
//   let isleapyear;
  
//   if(year % 4 == 0 && year % 100 != 0) isleapyear=true;
//   else if(year % 400 == 0) isleapyear=true;  //
//   else isleapyear = false;
  
//   return isleapyear;
// }
// console.log(ans(2008));
// console.log('hello');
// ————————————————————————————————
// // range of leap year 
// let ans = function(yearStart,yearEnd)      
// {
//    let isleapyear;
  
//   let arr=[];
//   for(let i = yearStart;i<=yearEnd;i++)
//   {
//      if(i % 4 == 0 && i % 100 != 0) {isleapyear=true; arr.push(i) ;}
//      else if(i % 400 == 0) {isleapyear=true; arr.push(i); }
//      else isleapyear = false;
//   }
//   return arr;
// }
// console.log(ans(2008,2018));


// ————————————————————————————————
// // t	





// import React,{useState ,useEffect,useRef} from "react";
// import "./style.css";

// export default function App() {

//   // const [time,setTime] = useState(0);
//   // const [isRunnig ,setisrunning] = useState(false);
//   // const timeRef = useRef(null);
// const [data,setdata]= useState([]);

// // useEffect(()=>{
// //   if(isRunnig)
// //   {
// //     timeRef.current = setInterval(()=>{
// //        setTime(prevTime=>{ prevTime+1});
// //     },60000)
// //   }else{
// //     clearInterval(timeRef.current);
// //   }
// //   return ()=>{clearInterval(timeRef.current);}
// // },[])


// // const startTimer =(time)=>{
// //   setisrunning(true);
// //   const seconds =  time*60;
// //   setTime(time++);

// // }


// // const pauseTimer =()=>{
// //   setisrunning(false);
// // }

// useEffect(()=>{
//   fetch('https://www.google.com')
//   // .then(res=>{ 
//   //   if(!res.ok){
//   //     throw new Error('network request');
//   //   }
//   //   return res.json();
//   // })
//   .then(data=>{
//     setdata(data);
//     console.log(data);
//   }).catch(error=>{
//      console.log(error);
//   })
// },[])
//   return (  
//     <div>
//       {/* {time}
        
//       <button onclick={startTimer}>start</button>    
//        <button onclick={pauseTimer}>stop</button> */}
//     </div>
//   );
// }
// ————————————————————————————————
// // correct code of stop watch

// import React, { useState, useEffect } from 'react';
// import './style.css';

// export default function App() {
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setminutes] = useState(0);
//   let timer;

//   useEffect(() => {

//     timer = setInterval(() => {  setSeconds(seconds + 1);
//                                  if (seconds === 59) 
//                                  { setminutes(minutes + 1);
//                                    setSeconds(0);
//                                  }
//                               }, 1000);
//     return () => clearInterval(timer);
//   });

//   const start = () => {
//     setSeconds(0);
//     setminutes(0);
//   };
//   const stop = () => {
//     clearInterval(timer);
//   };

//   return (
//     <div>
//       <h1>Timer</h1>
//       <h1>
//         {' '}
//         {minutes < 10 ? '0' + minutes : minutes}:
//         {seconds < 10 ? '0' + seconds : seconds}
//       </h1>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//     </div>
//   );
// }

// ————————————————————————————————

// // finding number of array in
// let arr = [1,2,3,[1,2],5,[3,2],[3,5]];
// let count = 0;
// for(let i = 0;i<=arr.length;i++)
// {
//     if(Array.isArray(arr[i]))
//     {
//         count++;
//     }
// }
// console.log(count)
// ————————————————————————————————


// let occurr = {};
// const response = [];
// arr = [[1, 2, 3], [2, 3, 4,6], [3, 4, 5]];
// for(let i = 0 ;i< arr.length;i++)
// {
//     let Arrlength = arr[i];
//     for(let j = 0;j< Arrlength.length;j++)
//      {   
//         if(occurr[  arr[i][j]  ] === undefined) // this key is (present or undefined) 
//         {
//             console.log(occurr);
//             occurr[arr[i][j]] = 1;  // assine value to it "1"
//         }else{           
//              occurr[arr[i][j]] = occurr[arr[i][j]] + 1 ;
             
//              }
//      }
// }
// for(let count in occurr)
// {
//      if(occurr[count]===1){response.push(count)}
// }
// console.log(response);
// ————————————————————————————————

// // finding "null" in array shown by index.
// let arr =[1,2,3,null,5,6,7,null,9,null];
// let newarr =[];
// let obj ={};

// let nullCount = 0;
// for(let i = 0;i<= arr.length-1;i++)
// {
//    if(arr[i]==null)
//    {
//         newarr.push(i)
//         obj["null" + nullCount] = i
//         nullCount++;
//    }
// }
// console.log(newarr);
// console.log(obj);
// ————————————————————————————————
// //cheak factorial

// let arr = [3, 9, 27, 81,243];
// let count=0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == Math.pow(arr[0], i + 1)) {
//          count++;
//     }
// }
// if(count==arr.length){console.log(`it is correct factorial of ${arr[0]}`);}
// else console.log("not correct fectorial")

// ————————————————————————————————

// let arr = [2, "11", 3, "a2", false, 5, 7, 1];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let value = parseInt(arr[i]);
//     if ( typeof arr[i]=='number') {
//         sum += value;
//     }
// }
// console.log(sum); 


// ————————————————————————————————


// // import React ,{useEffect,useState}from "react";
// // import "./style.css";

// // export default function App() {

// //      let [mydata,setdata] = useState();
// //      let [correntvalue,setcorrentvalue]=useState();

// //      function getdata()
// //      { console.log("click");
// //          fetch('https://jsonplaceholder.typicode.com/posts')
// //          .then((res)=>{
// //            if(!res.ok){
// //              throw new Error('network error')

// //             }
// //            return res.json();
// //          })
// //          .then((data)=>{
// //            console.log(data);
// //            setdata(data);
// //          })
// //          .catch((error)=>{
// //            console.log(error);
// //          }

// //          )
// //      }

// //      function datafilter()
// //      {
// //       console.log("onChange");

// //      }

// //   return (
// //     <div>
// //        <button onClick={getdata}>get data</button>
// //       <input onChange={datafilter} value={correntvalue} />

// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// export default function App() {
//   const [myOptions, setMyOptions] = useState([]);
//   function getData() {
//     // fetch data
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         return response.json();
//       })
//       .then((res) => {
//         for (var i = 0; i < res.length; i++) {
//           if (!myOptions.some((obj) => obj.label == res[i].name)) {
//             // create an object with a label
//             let object = {
//               label: res[i].name,
//               usersName: res[i].username,
//             };
//             myOptions.push(object);
//           }
//         }
//         setMyOptions(myOptions);
//       });
//   }
//   useEffect(() => getData(), [myOptions]);
//   return (
//     <div>
//       <h2>
//         {' '}
//         Using the <i> Material UI Autocomplete </i> component to implement
//         search.{' '}
//       </h2>
//       <Autocomplete
//         Style={{ width: 400 }}
//         autoComplete
//         autoHighlight
//         freeSolo
//         options={myOptions}
//         renderInput={(data) => (
//           <TextField {...data} variant="outlined" label="Search Box" />
//         )}
//       />
//     </div>
//   );
// }







// ==============================



// // import React from 'react';
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
