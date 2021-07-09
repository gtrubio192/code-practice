// Sliding window problem

// Given an array of positive numbers and a positive number ‘k,’ 
// find the maximum sum of any contiguous subarray of size ‘k’.



const max_sub_array_of_size_k = function(k, arr) {
  // TODO: Write your code here
  let sum = 0;
  let max = 0;
  let start = 0;

  for(let end = 0; end < arr.length; end++) {
    sum += arr[end];
    if(end >= k - 1) {
      max = Math.max(sum, max);
      sum -= arr[start];
      start += 1;
    }
  }
  return max;
};