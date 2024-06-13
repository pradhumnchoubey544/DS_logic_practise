

// #How to implement Bubble sort in JavaScript?
// function bubbleSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//       let swapped = false;



//       for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//           swapped = true;
//         }
//       }


//       if (!swapped) {
//         break;
//       }
//     }
//     return arr;
//   }
//   const numbers1 = [5, 1, 4, 2, 8];
//   const sortedNumbers = bubbleSort(numbers1);
//   console.log(sortedNumbers); // Op: [1, 2, 4, 5, 8]


let arr = [1, 2, 5, 4, 3];
for (let j = 0; j <= arr.length; j++) {
    let swipe = false;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
            swipe = true;
        }
    }
    if (!swipe) {
        console.log("break", [j]);
        break;
    }
}
console.log(arr);


