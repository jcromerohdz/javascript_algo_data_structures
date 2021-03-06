/* 
Implement a function called countUniqueValues, which
accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be
sorted
*/

function countUniqueValues(arr){
  if(arr.length === 0) return 0
  let left = 0
  for(let rigth=1; rigth < arr.length; rigth++){
    if(arr[left] !== arr[rigth]){
      left ++
      arr[left] = arr[rigth]
    }
  }

  return left + 1
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) //0
console.log(countUniqueValues([-2-1-1,0,1])) // 2