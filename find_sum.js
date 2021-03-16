/*
  loop through array
  find if any 2 elements in array add up to target
*/
find_sum = (arr, target) => {
  let found = false;

  for(let i = 0; i < arr.length; i++) {
    for(let pointer = i; pointer + 1 < arr.length; pointer++) {
      let sum = arr[i] + arr[pointer + 1];
      console.log(`i value: ${arr[i]} \t pointer value: ${arr[pointer+1]} \t SUM: ${sum}`)
      if(target === sum) {
        found = true;
        console.log('SUM FOUND')
        return found;
      }
    }
  }
  return found;
}

let arr = [35, 14, 10, 15, 56, 12, 33, 87, 9, 7];
let targetSum = 17;

console.log(find_sum(arr, targetSum));