/*
  loop through array
  find if any 2 elements in array add up to target
*/
find_sum = (arr, target) => {
  let found = false;

  for(let i = 0; i < arr.length; i++) {
    for(let pointer = i; pointer + 1 < arr.length; pointer++) {
      let sum = arr[i] + arr[pointer + 1];
      // console.log(`i value: ${arr[i]} \t pointer value: ${arr[pointer+1]} \t SUM: ${sum}`)
      if(target === sum) {
        found = true;
        console.log('SUM FOUND')
        return found;
      }
    }
  }
  return found;
}
// ***********************************************************
// Superior solution
find_sum_hash = (arr, target) => {
  let m = new Map();
  for(let i = 0; i < arr.length; i++) {
    let compliment = Math.abs(target-arr[i]);
    if(m.has(compliment)) {
      return true;
    }
    else {
      m.set(arr[i], i)
    }
  }
  return false;
}

let arr = [35, 14, 10, 15, 56, 12, 33, 87, 9, 7];
let targetSum = 17;
// let t1 = document.performance.now()

console.log(find_sum(arr, targetSum));
// let t2 = performance.now()
// console.log('first performance time: ', t2-t1)
console.log('Using Map: ', find_sum_hash(arr, targetSum))
