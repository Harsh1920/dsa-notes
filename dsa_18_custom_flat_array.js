let arr =[1,[2,3],[4,5],6]

// o/p = [1,2,3,4,5,6]

let result =[]
function flatCustom(arr,result){
  
  for (let val of arr) {
    if (Array.isArray(val)) {
      flatCustom(val,result)
    }else{
      result.push(val)
    }
  }
  return result;
}

console.log(flatCustom(arr,result))