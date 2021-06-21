/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
  let total = nums[0];
  let chunkSize = k;
  let i = 0;
  let size = nums.length;
  while(i < size-1) {
      if(k + i + 1 > nums.length) {
          chunkSize = size - i - 1;
      }
      else {
          chunkSize = k;
      }
      let chunk = nums.slice(i+1, i+1+chunkSize);
      console.log("chunk ", chunk)
      let max = Math.max(...chunk);
      let maxIdx = chunk.indexOf(max);
      let maxRealIdx = maxIdx + i + 1;
      total += nums[maxIdx + i + 1];
      i = maxRealIdx;
      console.log('i ', i)
  }
  return total;
};