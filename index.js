// array sorting
const arr = [3,7,2,1,0,6,7,8,9,10];

for(let i = 0; i<= arr.length-1;i++)
{   let k = arr[i];
    console.log(k,"hello");  // 3 
    for(let j = 0 ;j<= arr.length-1;j++)
        {  
          if( arr[j] < k)     // arr[j] > k
            {
                [arr[j],arr[i]]=[arr[i],arr[j]];
                console.log(arr[i],arr[j],arr[j],arr[i])  // 7 3 3 7
                console.log(arr);  //[  7, 3, 2, 1, 0, 6, 7, 8, 9, 10  ]
            }
           
        }
} 
 console.log(arr);
 // if arr[i] and arr[j] have same value dont loop
 // 6000-500 ,1000 , 204
 // 7 hills 
 // 3 sheing 
 // adilaksmi pg ,nikhil 
 // 