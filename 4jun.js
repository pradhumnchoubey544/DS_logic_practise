// array sorting
// const arr = [3,7,2,1,0,6,7,8,9,10];

// for(let i = 0; i<= arr.length-1;i++)
// {   let k = arr[i];
//     console.log(k,"hello");  // 3 
//     for(let j = 0 ;j<= arr.length-1;j++)
//         {  
//           if( arr[j] < k)     // arr[j] > k
//             {
//                 [arr[j],arr[i]]=[arr[i],arr[j]];
//                 console.log(arr[i],arr[j],arr[j],arr[i])  // 7 3 3 7
//                 console.log(arr);  //[  7, 3, 2, 1, 0, 6, 7, 8, 9, 10  ]
//             }
           
//         }
// } 
//  console.log(arr);

 // if arr[i] and arr[j] have same value dont loop
 // 6000-500 ,1000 , 204
 // 7 hills 
 // 3 sheing 
 // adilaksmi pg ,nikhil 
 // 

 //————————————————————————————————

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
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
// 0-254-6-8

//————————————————————————————————
//let arr = [10, 9, 4, 2, 5, 3];
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
//————————————————————————————————
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

// var s= 'The Quick Brown Fox';
// for(let i = 0;i<=s.length;i++)
// {
//   if(s[i] == s[i].toUpperCase()){s[i]=s[i].toLowerCase();}
//   else{s[i]=s[i].toUpperCase();}
// }
// console.log(s);
// / by using "result veriabel"
// var s= 'The Quick Brown Fox';
// var result = '';
// for(let i = 0;i< s.length;i++)
// {
//   if(s[i] == s[i].toUpperCase()){result += s[i].toLowerCase();}
//   else{result += s[i].toUpperCase();}

// }
// console.log(result);


