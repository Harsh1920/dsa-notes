// Divide and Conquerer Technique...

// Problem: Find the index of given number in sorted array => 7
// Input: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// Output: Index of 7 element is 6. 6 should be the output.

// Logic explanation...
// min = 0 => 1 (element)
// max = array.length-1 => 15 (element)

// First find midIndex: (min+max)/2 => (0+14)/2 => 7 (7th index element is 8)

// Now we have the element of the midIndex.. let's compare it...

// if array[midIndex] < number (here's the number I want to search the index of.)
// We will increase the min value.. Like this... => min = midIndex + 1

// if array[midIndex] > number
// We will decrease the max value.. ==> max = midIndex - 1;

function findIndex(array, number) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);

    if (array[midIndex] < number) {
      min = midIndex + 1;
    } else if (array[midIndex] > number) {
      max = midIndex - 1;
    } else {
        return midIndex;
    }
  }
  return -1;
}

let result = findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 11);
console.log("Index of the given number is: ", result);
