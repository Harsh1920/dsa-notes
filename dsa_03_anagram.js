// Problem: 3 : Check the string is Anagram or not => 'hello' => 'llheo'

// What is string anagram => Number of letter should be same on both string
// Like in hello :
// 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1
// And in llheo :
// 'l' => 2, 'h' => 1, 'e' => 1, 'o' => 1

// Condition:
// 1) Both string length should be equal. Else, we can't check anagram.
// 2) Check letters equality on both string. Letter arrangement doesn't matter.

// Input: 'hello' => 'llheo'
// Output:

// Time Complexity: Linear Time Complexity (We are not using nested loop that's why.)

// ===================================================================================== //
      
//   Solution: 1
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let count = {};
  for (let letters of str1) {
    count[letters] = (count[letters] || 0) + 1;
  }

  for (let items of str2) {
    if (!count[items]) {
      return false;
    }
    count[items] -= 1;
  }
  return true;

}

// let result = isAnagram("hello", "lhheo");
// console.log('Is given string anagram? ',result);

// Solution : 2

// function isAnagram(str1, str2) {
//   if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let result = isAnagram("harsh", "arshh");
// console.log("Is string anagram?", result);

// Solution : 3

// function anagram(string1, string2) {
//   if (string1.length === string2.length) {
//     let string1ToArray = string1.split("").sort();
//     let string2ToArray = string2.split("").sort();

//     if (JSON.stringify(string1ToArray) == JSON.stringify(string2ToArray)) {
//       console.log("it is a anagram");
//     }
//   } else {
//     console.log("not a anagram");
//   }
// }

// let res = anagram("hello", "lloeh");
// console.log(res);

// let str = 'harsh';

// let splitStr = str.split();
// console.log(splitStr);
// console.log(typeof splitStr);
// let sortStr = splitStr.sort();
// let joinStr = sortStr.join("");
// console.log(joinStr);



