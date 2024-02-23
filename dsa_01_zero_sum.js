// Problem: 1 : Checking sum zero

// Input: [-5,-4,-3,-2,0,2,4,6,8]
// Output: [-4, 4]

// Time Complexity: o(n^2) Quadratic Time Complexity

// ************************************************************ //

function getSumZeroPair(array) {
  for (let elements of array) {
    for (let j = 1; j < array.length; j++) {
      if (elements + array[j] === 0) {
        return [elements, array[j]];
      }
    }
  }
}

let result = getSumZeroPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

