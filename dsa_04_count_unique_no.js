// Problem: 4 : Counting unique numbers..

// Input: [1,1,2,2,3,4,4,5,6,7,8,8]
// Output: 8

// Time Complexity: o(n) => Linear time complexity

// Condition: Below solution only works if the array is sorted.

// ===================================================================================== //

// Solution: 1

function countArray(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    // console.log("Looping");
    if (array[i] !== array[i + 1]) {
      counter++;
    }
  }
  return counter;
}

let result = countArray([1, 2, 2, 2, 3, 4, 9, 9, 9, 11, 11]);
console.log("Unique numbers:", result);

// Solution: 2

function countUniqueNumber(array) {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array element doesn't exists!");
  }
}

let result2 = countUniqueNumber([1, 2, 2, 2, 3, 4, 9, 9, 9, 11, 11, 12, 13]);
console.log(result2);

// Solution 3

function countUnique(arr) {
  let count = {};

  for (let el of arr) {
    count[el] = count[el] ? count[el] + 1 : 1;
  }

  return Object.keys(count).length;
}

const result3 = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log(result3);
