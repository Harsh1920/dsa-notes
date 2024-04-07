// Checking square in another array...

// Input: [1,2,3,4] and [1,9,4,16]
// Output: True

// Case 1 => Using inbuilt function...

// Case 2 => Without inbuilt function...

function isSquareCheck(arr1, arr2) {
  let flag = false;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] * arr1[i] === arr2[j]) {
        flag = true;
      }
      if (j === arr2.length - 1) {
        if (!flag) {
          console.log("Flag is false!");
          return false;
        }
      }
    }
  }
  return true;
}

const result = isSquareCheck([1, 2, 3, 4], [1, 9, 16, 4]);
console.log("Result is: ", result);

// Time Complexity : O(n^2) (Just bcz of two loops, but we can do it liner!)

function checkSquare(arr1, arr2) {
  const result = arr1.every((el, i) => {
    return el ** 2 === arr2[i];
  });
  return result;
}

const val = checkSquare([1, 2, 3, 4], [1, 4, 9, 16]);
console.log("Value is: ", val);

// ================================================================

// Input: [1,2,3,4] and [1,9,4,16]
// Output: True

const checkSquare = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let el of arr1) {
    // obj1[el] = (obj1[el] || 0) + 1
    obj1[el] = ++obj1[el] || 1;
  }

  for (let el of arr2) {
    // obj2[el] = (obj2[el] || 0) + 1
    obj2[el] = ++obj2[el] || 1;
  }

  for (let key in obj1) {
    let sqr = key ** 2;
    if (!(sqr in obj2)) {
      return false;
    }
    if (obj2[sqr] !== obj1[key]) {
      return false;
    }
  }

  return true;
};

const result2 = checkSquare([1, 2, 3, 2], [9, 1, 4, 4]);
console.log(result2);
