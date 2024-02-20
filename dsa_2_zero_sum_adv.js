// Problem: 2 : Checking sum zero (Optimized Solution)

// Input: [-5,-4,-3,-2,0,2,4,6,8]
// Output: [-4, 4]

// Time Complexity: o(n) Linear Time Complexity

function sumZeroArray(array) {
  let left = 0;
  let right = array.length - 1;
  let sum;

  while (left < right) {
    sum = array[left] + array[right];
    console.log("Left:", array[left]);
    console.log("Right:", array[right]);
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    }
  }
}

let result = sumZeroArray([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);
