// Check if the given strign or number is palindrome.

// Case: 1 => using javascript inbuilt function...
//   s = s.toLowerCase().replace(/[^a-z0-9]/gi,''); => use this to remove any other char apart from number and string

function isPal(str) {
  let reverse = str.split("").reverse().join("");
  return str.toLowerCase() === reverse.toLowerCase() ? true : false;
}

const result = isPal("jinal");
// console.log(result);

// Case: 2 => Without using inbuilt function...

function isPal2(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

const result2 = isPal2(141);
console.log("Case 2 =>", result2);

// This works for both number and string...

// Case: 3 => More generic way..

let inputStr = "harsh";
let revesedStr = "";

function isPalindrom(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    revesedStr += str[i];
  }
  return inputStr == revesedStr;
}

const result3 = isPalindrom(inputStr);
console.log(result3);
