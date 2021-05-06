/**
 * FACEBOOK Mock interview question:
 * Write an algo that brings all nonzero elements to left of the array
 * and returns number of non-zero elements.
 * No care is given what happens to right side of array.
 * @param {[]} arr 
 * @returns {int} left
 */


 // 0  1  2  3  4  5 
 //[0, 1, 2, 0, 4, 0]

const nonZeroToLeft = (arr) => {
  let left = 0;
  let right = arr.length-1;

  while(left <= right) {
    if(arr[right] === 0) {
      right--;
    }
    else if(arr[left] !== 0) {
      left++;
    }
    else {
      arr[left] = arr[right];
      left++;
      right--;
    }
  }

  return [left, arr];
}

console.log(nonZeroToLeft([0, 1, 2, 0, 4, 0]))