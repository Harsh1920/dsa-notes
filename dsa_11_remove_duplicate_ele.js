// Solution : 1

const array = [10, 20, 30, 20, 30];
const tempArr = [];
function uniqueValue(arr) {
  for (let ele of arr) {
    if (tempArr.indexOf(ele) === -1) {
      tempArr.push(ele);
    }
  }
}
uniqueValue(array);
console.log(tempArr);

// Solution : 2

let arr1 = ["A", "B", "A", "C", "B"];
let uniqueValue1 = [...new Set(arr1)];
console.log(uniqueValue1);

// Solution : 3

var arr = ["A", "B", "A", "C", "B", "B"];

var res = [];
function uniqueArr(arr) {
  arr.forEach((element) => {
    if (!res.includes(element)) {
      res.push(element);
    }
  });
}

uniqueArr(arr);
console.log(res);
