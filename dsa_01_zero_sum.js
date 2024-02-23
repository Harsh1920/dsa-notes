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

// with O(n) time complexity 

{

  let nums = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
  const sum = () =>{
    let left =0;
    let right = nums.length -1;
    while(left<right){
      const sum = nums[left] + nums[right];
      if(sum > 0){
        right--
      }
      else if (sum == 0){
        return [nums[left],nums[right]]
      }else{
        left++;
      }
    }
    
  }
  
  
  const result = sum()
  console.log("result: ",result)
  
}

