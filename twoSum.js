/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// It turns out we can do it in one-pass. 
// While we iterate and inserting elements into the table, we also look back 
// to check if current element's complement already exists in the table.
//  If it exists, we have found a solution and return immediately.

var twoSum = function(nums, target) {
    // put nums into hash - num:index
    // use compliment to find answer in hash
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if(hash[nums[i]] >= 0) {
          return [i, hash[nums[i]]]
        }
        hash[compliment] = i;
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // create hash of all compliments, nums[i] - target with corresponding index
  // iterate over nums, and if hash contains nums[i],
  // and i !== hash[nums[i]], return [i, hash[nums[i]]]
  let compliments = new Map();

  for(let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    // if it already exists in hash, return
    // will never return same i values
    if(compliments.has(nums[i])) {
        return [i, compliments.get(nums[i])];
    }
    // else, add compliment to hash
    compliments.set(compliment, i)
}
};