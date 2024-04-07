// Recursion means a function call itself.

// Note: If a function call itself then there must be and endpoint
// otherwise it will get called for infinite time...

// Demo...

// let counter = 0;
// function iAmRecursion(number) {
//   if (counter > number) {
//     return;
//   }
//   counter++;
//   console.log("Function called!", counter);
//   iAmRecursion(number);
// }

// iAmRecursion(10);

// Sorting using Recursion Function...

// Input: [2,3,1,4]
// Output:

let inputArr = [2, 3, -1, 3, 7, -4, 4, 5, -7, 8, 9, -34, 12];
let newArr = [];
let i = 0;
let j = 1;

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function checkSort(arr) {
  if (isSorted(arr)) {
    newArr = arr;
    return;
  } else if (arr[i] <= arr[j]) {
    i++;
    j++;
    checkSort(arr);
  } else {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i = 0;
    j = 1;
    checkSort(arr);
  }
}

checkSort(inputArr);

console.log(newArr);

// Helper recursive function....
