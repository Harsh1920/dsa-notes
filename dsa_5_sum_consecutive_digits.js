// Problem: 5 : Count largest sum of consecutive digits..

// Input: [1,2,3,4,3,5,4,6,7,8]
// Output: If i consider 4 consecutive digit then o/p will be 25

// We have to identify overself that how many times the loop will work. Here is the formula...
// Formula: Total number of elements - nums of consecutives + 1

// Eg: We have 10 elemets in this array. Considereing 4 consecutive digits so number of loops will be: 10 - 4 + 1 = 7
// Loop will work 7 times..

// Time Complexity:

// Conditions:
// 1) You can consider any consecutive digits like 2,3,4 and so on.

function findLargest(array, num) {
  if (num > array) {
    throw new Error("Number is not greater than array!");
  } else {
    let max = 0;

    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        // console.log("i:", i + " " + "j:", j);
        // console.log(array[i + j]);
        temp = temp + array[i + j];
        // console.log("Temp value:",temp);

      }
      // console.log("Outer Temp Value:", temp);
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

let result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log("Sum is:", result);
