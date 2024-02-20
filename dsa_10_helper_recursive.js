// Helper Recursive Function...

// Note: Helper recursive function means we are not calling the parent function repeatedly rather we will just
// keep calling child function again and again. That's how it will help to main function to get the output.
// here this child function is called helper recursive function.

// Input: [1,2,3,4,5,6,7,8,9,10];
// Output: [1,3,5,7,9];

function findOdd(arr) {
  let oddArray = [];
  function helperFunction(args) {
    if (args.length === 0) {
      return;
    }
    if (args[0] % 2 !== 0) {
      oddArray.push(args[0]);
    }
    helperFunction(args.slice(1));
  }

  helperFunction(arr);
  return oddArray;
}

let result = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.slice(1));


