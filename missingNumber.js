/**
 * 
 * Given an array nums containing n distinct numbers in the range [0, n], 
 * return the only number in the range that is missing from the array. 
 * 
 * Constraints:

    n == nums.length
    1 <= n <= 104
    0 <= nums[i] <= nums.length
    All the numbers of nums are unique.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // save nums.length in variable
    // iterate nums over its size and compare each number to element in nums
    const numsSet = new Set(nums)
    const size = numsSet.size;

    for(let i = 0; i <= size; i++) {
      if(!numsSet.has(i)) {
        return i;
      }
    }

};

