/**
 * 
 *
 * You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Constraints:

2 <= nums.length <= 104
1 <= nums[i] <= 104

 Note: Since we have a set starting at 1, we know each number should be in there only once,
    and that the set is NOT in consecutive sequence. 
    ie:  set 1-6, [3,2,2,4,5,6...]

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
 */

/**
    Test cases:
    Input: [3,2,2], Expected: [2,1]
    Input:[1, 2, 2, 3, 4, 5, 6, 7, 8, 9], Expected:[2,10], my output:[2,3]
    Input:[1, 2, 2, 3, 4, 5, 6, 7, 9], Expected:[2,8]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * @description Iterate thru nums array and make sure sequence is not broken. 
 *  Find duplicate, find missing number in sequence
 */
var findErrorNums = function(nums) {
  let duplicateNum = null;
  let missingNum = null;
  let foundDup = false;
  let duplicateIndex = 0;
  let foundMismatch = false;
  
  // sort array first
  nums.sort((a, b) => a - b);
  console.log('Sorted nums: ', nums)

  // find duplicate
  for(let i = 0; i < nums.length-1 && !foundDup; i++) {
    if(nums[i] === nums[i+1])  {
        duplicateNum = nums[i];
        duplicateIndex = i+1;
        foundDup = true;
        console.log(`Duplicate ${duplicateNum} found at index ${duplicateIndex}`)
    }
  }

  // edge case 1: 1 is skipped
  if(nums[0] === 2 && foundDup) {
    missingNum = 1;
    return [duplicateNum, missingNum];
  }
  if(nums[0] === 1 && foundDup && nums.length === 2) {
    missingNum = 2;
    return [duplicateNum, missingNum];
  }

  // check for non-sequential order
  let j = 0;
  for(j ; j < nums.length-1 && !foundMismatch; j++) {
    // edge case 1: dup is in sequential order, 
    // but removes an element way down the line
    console.log(`Difference btwn ${nums[j]} and ${nums[j+1]} is ${nums[j+1] - nums[j]}`)
    if(nums[j+1] - nums[j] > 1) {
      console.log(`Non sequential nums [${nums[j]}, ${nums[j+1]}]. Missing num should be ${nums[j] + 1}`)
      missingNum = nums[j] + 1;
      foundMismatch = true;
    }
  }
  
  if(nums.length-1 === j && !foundMismatch) {
    missingNum = nums[j] + 1;
    console.log('Mismatch at end of nums: ', missingNum)
  }

  return [duplicateNum, missingNum]
};

const set1 = [1,5,3,2,2,7,6,4,8,9];
const set2 = [3,2,2];
const set3 = [1,3,3];
console.log(findErrorNums(set1))