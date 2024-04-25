const arr = [1, 423, 6, 46, 34, 23, 13, 53, 4];
function minMax(arr) {
  arr.sort((a,b)=>a-b)
  return [arr[0], arr[arr.length-1]]
}
console.log(minMax(arr))