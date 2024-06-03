
// # given arr=[1,2,3,4] you have to make output ans = [24,12,8,4] mean ans[i] = producee of all number except num[i]
// let num1 = [1,2,3,4];
// let leftArr = [];
// let rightArr = [];
// let ans = [];

// leftArr[0] = num1[0];
// rightArr[n-1] = num1[n-1];

// for(let i = 1;i<n;i++)
//     {
//         leftArr[i] = leftArr[i-1] * num1[i];
//     }

// for(let i = n-2;i> 0 ;i--)
//     {
//         rightArr[i] = rightArr[i+1];
//     }

//     ans[0] = rightArr[1];
//     ans[n-1] = leftArr[n-2];

//     for(let i  =1;i<n-1;i++)
//     {
//         ans[i] = leftArr[i-1] * right[i-1];
//     }
// console.log(ans);



// # give an integer array num1 ,find the Subarray with the largest sum and return its sum.
// let num1 = [-2,1,-3,4,-1,2,1,-5,4];
// var maxArray= function (num1)
// {
// let mx = num1[0];
// let sm = 0;
 
// num1.forEach((n)=>{
//     sm += n;
//     mx = Math.max(mx,sm);
//     if(sm < 0) sm =0;
// })
// return mx;
// }
// console.log(maxArray(num1));


//# You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//  Find two lines that together with the x-axis form a container, such that the container contains the most water.


// let height = [1,8,6,2,5,4,8,3,7];
// var maxArea = function(height)
// {
//     let mx  =0;
//     let l =0;
//     let r =height.length -1;
//     while(l<r)
//         {
//             mx =Math.max(mx,Math.min(height[l],height[r])*(r-l))
//             if(height[l]<height[r])l+=1;
//             else if(height[l]<height[r])l+=1;
//             else {l+=1
//                   r-=1
//                  }
//         }
// return mx;
// }
// console.log(maxArea(height));




